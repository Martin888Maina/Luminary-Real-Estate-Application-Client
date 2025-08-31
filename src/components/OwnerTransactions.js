import React, { useState, useEffect } from 'react';
import { Table, Statistic, Row, Col, Input, DatePicker } from 'antd';
import axios from 'axios';
import moment from 'moment';

const { RangePicker } = DatePicker;
const { Search } = Input;

const OwnerTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);
  const [paystackTransactionIdFilter, setPaystackTransactionIdFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [amountFilter, setAmountFilter] = useState('');
  const [dateRange, setDateRange] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const token = sessionStorage.getItem('access_token'); // Update the key here
      // console.log('Stored Token from ownerTransaction page:', token); // Debug: Check if token is present

      if (!token) {
        // console.error('No token found in session storage');
        setLoading(false);
        return;
      }

      try {
        // Fetch owner-specific transactions
        const response = await axios.get('http://localhost:4000/Transaction/ownerTransactions', {
          headers: {
            'Authorization': `Bearer ${token}` // Ensure correct format
          }
        });

        if (response.status !== 200) {
          throw new Error('Failed to fetch transactions');
        }

        setTransactions(response.data);
        setLoading(false);

        // Calculate total amount
        const total = response.data.reduce((acc, transaction) => acc + transaction.amount, 0);
        setTotalAmount(total);
      } catch (error) {
        // console.error('Error fetching transactions:', error);
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []); // Empty dependency array means this effect runs once on component mount

  const handleDateRangeChange = (dates) => {
    setDateRange(dates);
  };

  const filteredTransactions = transactions.filter(transaction => {
    const matchesPaystackTransactionId = paystackTransactionIdFilter ? transaction.paystack_transaction_id.toLowerCase().includes(paystackTransactionIdFilter.toLowerCase()) : true;
    const matchesLocation = locationFilter ? transaction.combine.location.toLowerCase().includes(locationFilter.toLowerCase()) : true;
    const matchesAmount = amountFilter ? transaction.amount.toString().includes(amountFilter) : true;
    const matchesDateRange = dateRange.length > 0 ? moment(transaction.timestamp).isBetween(dateRange[0], dateRange[1]) : true;
    return matchesPaystackTransactionId && matchesLocation && matchesAmount && matchesDateRange;
  });

  const columns = [
    {
      title: 'Transaction ID',
      dataIndex: 'transaction_id',
      key: 'transaction_id',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'timestamp',
      render: (text) => new Date(text).toLocaleString(),
    },
    {
      title: 'Combine ID',
      dataIndex: ['combine', 'combine_id'],
      key: 'combine_id',
    },
    {
      title: 'Location',
      dataIndex: ['combine', 'location'],
      key: 'location',
    },
    {
      title: 'Start Date',
      dataIndex: ['combine', 'startDate'],
      key: 'startDate',
      render: (text) => new Date(text).toLocaleDateString(),
    },
    {
      title: 'End Date',
      dataIndex: ['combine', 'endDate'],
      key: 'endDate',
      render: (text) => new Date(text).toLocaleDateString(),
    },
    {
      title: 'Category',
      dataIndex: ['combine', 'category'],
      key: 'category',
    },
    {
      title: 'Paystack Transaction ID',
      dataIndex: 'paystack_transaction_id',
      key: 'paystack_transaction_id',
    },
  ];

  if (loading) {
    return <div className='display-1 mt-5 mb-5'>Loading...</div>;
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
            placeholder="Search by Paystack Transaction ID"
            onChange={(e) => setPaystackTransactionIdFilter(e.target.value)}
            allowClear
            style={{ width: '100%' }}
          />
        </Col>
        <Col span={6}>
          <Search
            placeholder="Search by Location"
            onChange={(e) => setLocationFilter(e.target.value)}
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
      </Row>
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={24}>
          <RangePicker
            onChange={handleDateRangeChange}
            style={{ width: '100%' }}
          />
        </Col>
      </Row>
      <Table dataSource={filteredTransactions} columns={columns} rowKey="transaction_id" style={{ marginTop: 20 }} />
    </div>
  );
};

export default OwnerTransactions;
