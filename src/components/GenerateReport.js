import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { 
  Document, 
  Page, 
  Text, 
  View, 
  StyleSheet, 
  PDFViewer, 
  PDFDownloadLink,
  Image
} from '@react-pdf/renderer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from 'react-awesome-spinners';
import './styling/GenerateReport.css';

// PDF Document Component
const PropertyReportDocument = ({ listing }) => {
  const startDate = new Date(listing.startDate).toLocaleDateString();
  const endDate = new Date(listing.endDate).toLocaleDateString();

  return (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        {/* Header */}
        <View style={pdfStyles.header}>
          <Text style={pdfStyles.headerTitle}>Property Listing Report</Text>
        </View>

        {/* Content */}
        <View style={pdfStyles.content}>
          <View style={pdfStyles.section}>
            <Text style={pdfStyles.sectionTitle}>Property Details</Text>
            
            <View style={pdfStyles.detailRow}>
              <Text style={pdfStyles.label}>Location:</Text>
              <Text style={pdfStyles.value}>{listing.location}</Text>
            </View>

            <View style={pdfStyles.detailRow}>
              <Text style={pdfStyles.label}>Listing ID:</Text>
              <Text style={pdfStyles.value}>{listing.combine_id}</Text>
            </View>

            <View style={pdfStyles.detailRow}>
              <Text style={pdfStyles.label}>Start Date:</Text>
              <Text style={pdfStyles.value}>{startDate}</Text>
            </View>

            <View style={pdfStyles.detailRow}>
              <Text style={pdfStyles.label}>End Date:</Text>
              <Text style={pdfStyles.value}>{endDate}</Text>
            </View>

            <View style={pdfStyles.detailRow}>
              <Text style={pdfStyles.label}>Amount:</Text>
              <Text style={pdfStyles.value}>${listing.amount}</Text>
            </View>

            <View style={pdfStyles.detailRow}>
              <Text style={pdfStyles.label}>Category:</Text>
              <Text style={pdfStyles.value}>{listing.category}</Text>
            </View>
          </View>

          {/* Property Image */}
          {listing.file_url && (
            <View style={pdfStyles.imageSection}>
              <Text style={pdfStyles.sectionTitle}>Property Image</Text>
              <View style={pdfStyles.imageContainer}>
                <Image src={listing.file_url} style={pdfStyles.image} />
              </View>
            </View>
          )}
        </View>

        {/* Footer */}
        <View style={pdfStyles.footer}>
          <Text style={pdfStyles.footerText}>
            Generated on {new Date().toLocaleDateString()} | Property Management System
          </Text>
        </View>
      </Page>
    </Document>
  );
};

// PDF Styles
const pdfStyles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 0,
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  content: {
    flex: 1,
    padding: 30,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
    borderBottom: '2px solid #4CAF50',
    paddingBottom: 5,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#555555',
    width: 80,
    marginRight: 10,
  },
  value: {
    fontSize: 12,
    color: '#333333',
    flex: 1,
  },
  imageSection: {
    marginTop: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: 300,
    height: 200,
    objectFit: 'cover',
    border: '1px solid #ddd',
  },
  footer: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    alignItems: 'center',
    borderTop: '1px solid #ddd',
  },
  footerText: {
    fontSize: 10,
    color: '#666666',
  },
});

const GenerateReport = () => {
  const { combine_id } = useParams();
  const history = useHistory();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/Combine/combineId/${combine_id}`);
        setListing(response.data);
        setLoading(false);
      } catch (error) {
        toast.error('An Error occurred while loading the listing data.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        setLoading(false);
      }
    };

    if (combine_id) {
      fetchData();
    }
  }, [combine_id]);

  const handlePreviewPDF = () => {
    setShowPreview(true);
  };

  const closePreview = () => {
    setShowPreview(false);
  };

  const handleDownloadStart = () => {
    setIsGenerating(true);
  };
  // eslint-disable-next-line
  const handleDownloadEnd = () => {
    setIsGenerating(false);
  };

  const handleBackToListing = () => {
    history.push(`/CombineId/${combine_id}`);
  };

  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="spinner-container">
          <Spinner size={120} color="#007bff" />
        </div>
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          Listing not found. 
          <button 
            className="btn btn-link p-0 ms-2"
            onClick={() => history.push('/')}
          >
            Go back to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid mt-4">
      {/* Navigation Header */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <button 
                className="btn btn-outline-secondary me-3"
                onClick={handleBackToListing}
              >
                ← Back to Listing
              </button>
              <h2 className="mb-0">PDF Report Generator</h2>
            </div>
            <div className="text-muted">
              <small>Listing ID: {listing.combine_id}</small>
            </div>
          </div>
        </div>
      </div>

      {/* Property Summary */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-light">
              <h5 className="mb-0">Property Summary</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-6">
                      <p><strong>Location:</strong> {listing.location}</p>
                      <p><strong>Amount:</strong> ${listing.amount}</p>
                      <p><strong>Category:</strong> {listing.category}</p>
                    </div>
                    <div className="col-md-6">
                      <p><strong>Start Date:</strong> {new Date(listing.startDate).toLocaleDateString()}</p>
                      <p><strong>End Date:</strong> {new Date(listing.endDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
                {listing.file_url && (
                  <div className="col-md-4">
                    <img 
                      src={listing.file_url} 
                      alt="Property" 
                      style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Generation Section */}
      <div className="generate-report-container">
        <div className="report-card">
          <h2 className="report-title">Generate Property Report</h2>
          
          <div className="report-preview">
            <div className="preview-section">
              <h3>Report Preview</h3>
              <div className="preview-grid">
                <div className="preview-item">
                  <span className="label">Location:</span>
                  <span className="value">{listing.location}</span>
                </div>
                <div className="preview-item">
                  <span className="label">Listing ID:</span>
                  <span className="value">{listing.combine_id}</span>
                </div>
                <div className="preview-item">
                  <span className="label">Amount:</span>
                  <span className="value">${listing.amount}</span>
                </div>
                <div className="preview-item">
                  <span className="label">Category:</span>
                  <span className="value">{listing.category}</span>
                </div>
              </div>
            </div>

            {listing.file_url && (
              <div className="preview-image">
                <img src={listing.file_url} alt="Property" />
              </div>
            )}
          </div>

          <div className="report-actions">
            <button 
              className="preview-button"
              onClick={handlePreviewPDF}
            >
              Preview PDF Report
            </button>
            
            <PDFDownloadLink
              document={<PropertyReportDocument listing={listing} />}
              fileName={`property-report-${listing.combine_id}.pdf`}
              className={`generate-button ${isGenerating ? 'generating' : ''}`}
              onClick={handleDownloadStart}
            >
              {({ blob, url, loading, error }) => {
                if (loading) {
                  setIsGenerating(true);
                  return 'Generating Report...';
                }
                if (error) {
                  setIsGenerating(false);
                  return 'Error generating PDF';
                }
                setIsGenerating(false);
                return 'Download PDF Report';
              }}
            </PDFDownloadLink>
          </div>

          {/* PDF Preview Modal */}
          {showPreview && (
            <div className="pdf-preview-modal">
              <div className="modal-overlay" onClick={closePreview}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <div className="modal-header">
                    <h3>PDF Report Preview</h3>
                    <div className="modal-header-actions">
                      <PDFDownloadLink
                        document={<PropertyReportDocument listing={listing} />}
                        fileName={`property-report-${listing.combine_id}.pdf`}
                        className="download-from-preview-button"
                      >
                        {({ blob, url, loading, error }) =>
                          loading ? 'Preparing...' : 'Download PDF'
                        }
                      </PDFDownloadLink>
                      <button 
                        className="close-button"
                        onClick={closePreview}
                        aria-label="Close modal"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                  <div className="modal-body">
                    <div className="pdf-viewer-container">
                      <PDFViewer style={{ width: '100%', height: '600px' }}>
                        <PropertyReportDocument listing={listing} />
                      </PDFViewer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default GenerateReport;


