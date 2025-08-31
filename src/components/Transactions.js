import React, { useState, useEffect } from 'react';
import { Table, Statistic, Row, Col, Input, DatePicker } from 'antd';
import axios from 'axios';
import moment from 'moment';

const { RangePicker } = DatePicker;
const { Search } = Input;

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);
  const [transactionIdFilter, setTransactionIdFilter] = useState('');
  const [amountFilter, setAmountFilter] = useState('');
  const [emailFilter, setEmailFilter] = useState(''); // Added state for email filter
  const [dateRange, setDateRange] = useState([]);
  const ownerEmail = sessionStorage.getItem('ownerEmail');

  const columns = [
    {
      title: 'Transaction ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Email',
      dataIndex: ['customer', 'email'],
      key: 'email',
    },
    // Add more columns as needed
  ];

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('http://localhost:4000/payment/transactions', {
          params: { email: ownerEmail },
        });

        if (response.status !== 200) {
          throw new Error('Failed to fetch transactions');
        }

        const data = response.data.data;
        setTransactions(data);
        setLoading(false);

        const total = data.reduce((acc, transaction) => acc + transaction.amount, 0);
        setTotalAmount(total);
      } catch (error) {
        // console.error('Error fetching transactions:', error);
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [ownerEmail]);

  const handleDateRangeChange = (dates) => {
    setDateRange(dates);
  };

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesTransactionId = transactionIdFilter ? transaction.id.toString().includes(transactionIdFilter) : true;
    const matchesAmount = amountFilter ? transaction.amount.toString().includes(amountFilter) : true;
    const matchesEmail = emailFilter ? transaction.customer.email.toLowerCase().includes(emailFilter.toLowerCase()) : true; // Added email filter
    const matchesDateRange = dateRange.length > 0 ? moment(transaction.timestamp).isBetween(dateRange[0], dateRange[1]) : true;
    return matchesTransactionId && matchesAmount && matchesEmail && matchesDateRange;
  });

  if (loading) {
    return <div className="display-1 mt-5 mb-5">Loading...</div>;
  }

  return (
    <div>
      <h2>Transaction History</h2>
      <Row gutter={16}>
        <Col span={6}>
          <Statistic title="Total Amount" value={totalAmount} precision={2} />
        </Col>
        <Col span={6}>
          <Search
            placeholder="Search by Transaction ID"
            onChange={(e) => setTransactionIdFilter(e.target.value)}
            allowClear
            style={{ width: '100%' }}
          />
        </Col>
        <Col span={6}>
          <Search
            placeholder="Search by Amount"
            onChange={(e) => setAmountFilter(e.target.value)}
            allowClear
            style={{ width: '100%' }}
          />
        </Col>
        <Col span={6}>
          <Search
            placeholder="Search by Email"
            onChange={(e) => setEmailFilter(e.target.value)}
            allowClear
            style={{ width: '100%' }}
          />
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={24}>
          <RangePicker onChange={handleDateRangeChange} style={{ width: '100%' }} />
        </Col>
      </Row>
      <Table dataSource={filteredTransactions} columns={columns} rowKey="id" style={{ marginTop: 20 }} />
    </div>
  );
};

export default Transactions;
