import React, { useState } from 'react';
import { Search, Filter, Download, Eye, FileText, Upload } from 'lucide-react';
import kochiLogo from '../assets/kochi-metro-logo.png';
import keralaLogo from '../assets/kerala-govt-logo.png';

interface Document {
  id: string;
  title: string;
  department: string;
  summary: string;
  uploadDate: string;
  type: string;
  language: string;
  tags: string[];
}

const mockDocuments: Document[] = [
  {
    id: '1',
    title: 'Policy Approval ',
    department: 'IT',
    summary: 'Summary Subject: This involves preliminary approval process...',
    uploadDate: '2024-01-15',
    type: 'PDF',
    language: 'English',
    tags: ['policy', 'approval']
  },
  {
    id: '2',
    title: 'INVOICE PAYMENT',
    department: 'Finance',
    summary: 'Summary Subject: This involves vendor payment processing...',
    uploadDate: '2024-02-20',
    type: 'PDF',
    language: 'English',
    tags: ['invoice', 'payment']
  },
  {
    id: '3',
    title: 'EMPLOYEE RECORDS',
    department: 'HR',
    summary: 'Summary Subject: This involves employee documentation...',
    uploadDate: '2024-03-10',
    type: 'DOC',
    language: 'Malayalam',
    tags: ['employee', 'records']
  },
  {
    id: '4',
    title: 'TECHICAL SPECIFICATIONS',
    department: 'IT',
    summary: 'Summary Subject: This involves technical specifications...',
    uploadDate: '2024-01-25',
    type: 'PDF',
    language: 'English',
    tags: ['technical', 'specs']
  },
  {
    id: '5',
    title: 'BUDGET ALLOCATION FY25',
    department: 'Finance',
    summary: 'Summary Subject: This involves budget allocation process...',
    uploadDate: '2024-02-28',
    type: 'XLS',
    language: 'Hindi',
    tags: ['budget', 'allocation']
  },
  {
    id: '6',
    title: 'RECRUITMENT PROCESS KMRL-2025',
    department: 'HR',
    summary: 'Summary Subject: This involves recruitment process documentation...',
    uploadDate: '2024-03-15',
    type: 'PDF',
    language: 'English',
    tags: ['recruitment', 'process']
  }
];

const DocumentLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [tagSearch, setTagSearch] = useState('');
  const [hoveredDoc, setHoveredDoc] = useState<string | null>(null);

  const sidebarItems = [
    { icon: Filter, label: 'Filter', active: true },
    { icon: FileText, label: 'Dashboard' },
    { icon: FileText, label: 'Documents' },
    { icon: FileText, label: 'Workflow' },
    { icon: FileText, label: 'Documents', highlight: true },
    { icon: FileText, label: 'Research' },
    { icon: FileText, label: 'Reports' },
    { icon: FileText, label: 'Reports' },
    { icon: FileText, label: 'Admin' },
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = ['2020', '2021', '2022', '2023', '2024', '2025'];

  const handleView = (docId: string) => {
    console.log('View document:', docId);
  };

  const handleDownload = (docId: string) => {
    console.log('Download document:', docId);
  };

  

  const handleOpenViewer = (docId: string) => {
    console.log('Open in viewer:', docId);
  };


  
  const handleUpload = () => {
    console.log('Upload document');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-[hsl(var(--header-bg))] px-6 py-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={kochiLogo} alt="Kochi Metro Rail" className="h-12 w-auto opacity-90" />
          </div>
          <div className="text-center flex-1">
            <h1 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-1">
              KRML DOCUMENT INTELLIGENCE PORTAL
            </h1>
            <p className="text-lg text-[hsl(var(--foreground))]">
              KOCHI METRO RAIL LIMITED | GOVERNMENT OF KERALA
            </p>
            <p className="text-base text-[hsl(var(--foreground))]">
              GOVERNMENT OF INDIA
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <img src={keralaLogo} alt="Government of Kerala" className="h-12 w-auto opacity-90" />
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-[hsl(var(--sidebar-bg))] min-h-[calc(100vh-5rem)] p-4">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-6 h-6 bg-[hsl(var(--primary))] rounded"></div>
            <span className="text-[hsl(var(--sidebar-text))] font-semibold">Classify</span>
          </div>
          <nav className="space-y-2">
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 px-3 py-2 rounded cursor-pointer transition-colors ${
                  item.active
                    ? 'bg-[hsl(var(--primary))] text-white'
                    : item.highlight
                    ? 'bg-[hsl(var(--sidebar-hover))] text-[hsl(var(--sidebar-text))]'
                    : 'text-[hsl(var(--sidebar-text))] hover:bg-[hsl(var(--sidebar-hover))]'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Page Title */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-4">
                DOCUMENT LIBRARY (ALL DOCUMENTS)
              </h2>
              
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[hsl(var(--muted-foreground))] w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-[hsl(var(--border))] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                />
              </div>

              {/* Filters */}
              <div className="flex items-center space-x-4 mb-6 flex-wrap">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-2 border border-[hsl(var(--border))] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                >
                  <option value="">Department</option>
                  <option value="IT">IT</option>
                  <option value="HR">HR</option>
                  <option value="Finance">Finance</option>
                </select>

                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-2 border border-[hsl(var(--border))] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                >
                  <option value="">Type</option>
                  <option value="PDF">PDF</option>
                  <option value="DOC">DOC</option>
                  <option value="XLS">XLS</option>
                </select>

                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-4 py-2 border border-[hsl(var(--border))] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                >
                  <option value="">Year</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>

                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="px-4 py-2 border border-[hsl(var(--border))] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                >
                  <option value="">Month</option>
                  {months.map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>

                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="px-4 py-2 border border-[hsl(var(--border))] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                >
                  <option value="English">English</option>
                  <option value="Malayalam">Malayalam</option>
                  <option value="Hindi">Hindi</option>
                </select>

                <input
                  type="text"
                  placeholder="Tags"
                  value={tagSearch}
                  onChange={(e) => setTagSearch(e.target.value)}
                  className="px-4 py-2 border border-[hsl(var(--border))] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                />

                <button
                  onClick={handleUpload}
                  className="bg-[hsl(var(--primary))] text-white px-6 py-2 rounded-lg hover:bg-[hsl(var(--primary))]/90 transition-colors flex items-center space-x-2"
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload Document</span>
                </button>
              </div>
            </div>

            {/* Document Grid */}
            <div className="grid grid-cols-3 gap-6">
              {mockDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className="relative bg-white border border-[hsl(var(--border))] rounded-lg p-6 hover:shadow-lg transition-all duration-200 cursor-pointer"
                  onMouseEnter={() => setHoveredDoc(doc.id)}
                  onMouseLeave={() => setHoveredDoc(null)}
                >
                  {/* Document Content */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-2 line-clamp-2">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-[hsl(var(--muted-foreground))] mb-1">
                      <span className="font-medium">Department:</span> {doc.department}
                    </p>
                    <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3 line-clamp-2">
                      {doc.summary}
                    </p>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">
                      <span className="font-medium">Uploaded:</span> {new Date(doc.uploadDate).toLocaleDateString()}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between space-x-2">
                    <button
                      onClick={() => handleView(doc.id)}
                      className="flex-1 bg-[hsl(var(--primary))] text-white py-2 px-3 rounded text-sm hover:bg-[hsl(var(--primary))]/90 transition-colors flex items-center justify-center space-x-1"
                    >
                      <Eye className="w-3 h-3" />
                      <span>View</span>
                    </button>
                    <button
                      onClick={() => handleDownload(doc.id)}
                      className="flex-1 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] py-2 px-3 rounded text-sm hover:bg-[hsl(var(--secondary))]/80 transition-colors flex items-center justify-center space-x-1"
                    >
                      <Download className="w-3 h-3" />
                      <span>Download</span>
                    </button>
                    <button
                      onClick={() => handleOpenViewer(doc.id)}
                      className="flex-1 bg-[hsl(var(--accent))] text-white py-2 px-3 rounded text-sm hover:bg-[hsl(var(--accent))]/90 transition-colors flex items-center justify-center space-x-1"
                    >
                      <FileText className="w-3 h-3" />
                      <span>Open</span>
                    </button>
                  </div>

                  {/* Hover Popup */}
                  {hoveredDoc === doc.id && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full bg-[hsl(var(--foreground))] text-white p-3 rounded-lg shadow-lg z-10 w-64">
                      <div className="text-sm">
                        <p className="font-semibold mb-1">{doc.title}</p>
                        <p className="opacity-90 mb-1">Department: {doc.department}</p>
                        <p className="opacity-90 mb-1">Type: {doc.type}</p>
                        <p className="opacity-90 mb-1">Language: {doc.language}</p>
                        <p className="opacity-90">Tags: {doc.tags.join(', ')}</p>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[hsl(var(--foreground))]"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DocumentLibrary;