import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  CheckCircle, 
  Clock, 
  Users, 
  BarChart3, 
  MessageSquare, 
  Settings, 
  Plus, 
  Brain, 
  AlertTriangle,
  TrendingUp,
  Target,
  GitBranch,
  Slack,
  Github,
  Bell,
  Search,
  Filter,
  Download,
  Share,
  RefreshCw,
  ChevronRight,
  Activity,
  Zap,
  Shield,
  Database,
  Edit,
  Trash2,
  Save,
  X,
  User,
  ChevronDown,
  ArrowUp,
  ArrowDown,
  PlayCircle,
  PauseCircle,
  CheckSquare,
  Square,
  Star,
  MoreHorizontal
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

// Professional styles object
const styles: { [key: string]: React.CSSProperties } = {
  body: {
    background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 25%, #e0e7ff 50%, #ddd6fe 75%, #c7d2fe 100%)',
    minHeight: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    margin: 0,
    padding: 0
  },
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 25%, #e0e7ff 50%, #ddd6fe 75%, #c7d2fe 100%)'
  },
  header: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e7eb',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
  },
  headerContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '72px'
  },
  logo: {
    display: 'flex',
    alignItems: 'center'
  },
  logoIcon: {
    background: 'linear-gradient(135deg, #9333ea 0%, #3b82f6 100%)',
    padding: '12px',
    borderRadius: '12px',
    marginRight: '16px'
  },
  logoText: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#111827',
    margin: 0
  },
  logoSubtext: {
    fontSize: '14px',
    color: '#6b7280',
    margin: 0
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  notificationBell: {
    position: 'relative',
    padding: '8px',
    color: '#6b7280',
    cursor: 'pointer',
    borderRadius: '8px'
  },
  notificationBadge: {
    position: 'absolute',
    top: '-4px',
    right: '-4px',
    width: '20px',
    height: '20px',
    backgroundColor: '#ef4444',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: '700'
  },
  userAvatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '2px solid #a855f7'
  },
  userName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#111827',
    margin: 0
  },
  userRole: {
    fontSize: '12px',
    color: '#6b7280',
    margin: 0
  },
  mainContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '32px 24px',
    display: 'flex',
    gap: '32px'
  },
  sidebar: {
    width: '288px'
  },
  sidebarCard: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    border: '1px solid #f3f4f6',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    padding: '16px'
  },
  tabButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    fontSize: '14px',
    fontWeight: '500',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    marginBottom: '8px'
  },
  tabButtonActive: {
    background: 'linear-gradient(135deg, #9333ea 0%, #3b82f6 100%)',
    color: '#ffffff',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  },
  tabButtonInactive: {
    backgroundColor: 'transparent',
    color: '#6b7280'
  },
  quickStatsHeader: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '12px',
    paddingTop: '24px',
    borderTop: '1px solid #e5e7eb'
  },
  quickStatItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px'
  },
  quickStatLabel: {
    fontSize: '14px',
    color: '#6b7280'
  },
  quickStatValue: {
    fontSize: '14px',
    fontWeight: '600'
  },
  main: {
    flex: '1'
  },
  heroCard: {
    background: 'linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #1d4ed8 100%)',
    color: '#ffffff',
    padding: '32px',
    borderRadius: '16px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    marginBottom: '32px'
  },
  heroHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px'
  },
  heroTitle: {
    fontSize: '32px',
    fontWeight: '700',
    margin: '0 0 8px 0'
  },
  heroSubtitle: {
    fontSize: '18px',
    color: '#c7d2fe',
    lineHeight: '1.6',
    marginBottom: '16px'
  },
  heroMetrics: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px'
  },
  heroMetric: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px'
  },
  heroRight: {
    textAlign: 'right'
  },
  heroDaysRemaining: {
    fontSize: '48px',
    fontWeight: '700',
    margin: '0 0 4px 0'
  },
  heroDaysLabel: {
    fontSize: '14px',
    color: '#c7d2fe'
  },
  heroRiskBadge: {
    marginTop: '12px',
    padding: '6px 12px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '20px',
    fontSize: '12px',
    display: 'inline-block'
  },
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
    marginBottom: '32px'
  },
  metricCard: {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '16px',
    border: '1px solid #f3f4f6',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    transition: 'box-shadow 0.2s ease'
  },
  metricHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px'
  },
  metricLabel: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    margin: '0 0 4px 0'
  },
  metricValue: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#111827',
    margin: '0 0 4px 0'
  },
  metricSubtext: {
    fontSize: '14px',
    color: '#6b7280'
  },
  metricIcon: {
    padding: '12px',
    borderRadius: '50%'
  },
  progressBar: {
    width: '100%',
    height: '8px',
    backgroundColor: '#e5e7eb',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #10b981 0%, #059669 100%)',
    borderRadius: '4px',
    transition: 'width 0.3s ease'
  },
  chartsGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '32px',
    marginBottom: '32px'
  },
  chartCard: {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '16px',
    border: '1px solid #f3f4f6',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
  },
  chartHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px'
  },
  chartTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#111827',
    margin: 0
  },
  chartActions: {
    display: 'flex',
    gap: '8px'
  },
  chartAction: {
    padding: '8px',
    color: '#6b7280',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  pieChartLegend: {
    marginTop: '16px'
  },
  legendItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px'
  },
  legendLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  legendColor: {
    width: '12px',
    height: '12px',
    borderRadius: '50%'
  },
  legendText: {
    fontSize: '14px',
    color: '#6b7280'
  },
  legendValue: {
    fontSize: '14px',
    fontWeight: '500'
  },
  insightsCard: {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '16px',
    border: '1px solid #f3f4f6',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    marginBottom: '32px'
  },
  insightsHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px'
  },
  insightsIcon: {
    padding: '8px',
    backgroundColor: '#f3e8ff',
    borderRadius: '8px',
    marginRight: '12px'
  },
  insightsTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#111827',
    margin: 0
  },
  insightsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px'
  },
  insightItem: {
    background: 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)',
    border: '1px solid #f59e0b',
    borderRadius: '12px',
    padding: '20px'
  },
  insightItemWarning: {
    background: 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)',
    border: '1px solid #f59e0b',
    borderRadius: '12px',
    padding: '20px'
  },
  insightItemBlue: {
    background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
    border: '1px solid #3b82f6',
    borderRadius: '12px',
    padding: '20px'
  },
  insightContent: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px'
  },
  insightIcon: {
    marginTop: '2px',
    flexShrink: 0
  },
  insightTitle: {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '8px'
  },
  insightText: {
    fontSize: '14px',
    lineHeight: '1.5',
    marginBottom: '12px'
  },
  insightActions: {
    display: 'flex',
    gap: '8px'
  },
  insightButton: {
    fontSize: '12px',
    padding: '6px 12px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '500'
  },
  insightButtonPrimary: {
    backgroundColor: '#f59e0b',
    color: '#ffffff'
  },
  insightButtonSecondary: {
    backgroundColor: 'transparent',
    color: '#d97706'
  },
  placeholderCard: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    border: '1px solid #f3f4f6',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    padding: '64px',
    textAlign: 'center'
  },
  placeholderIcon: {
    padding: '16px',
    backgroundColor: '#f3e8ff',
    borderRadius: '50%',
    width: '64px',
    height: '64px',
    margin: '0 auto 16px auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  placeholderTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '8px'
  },
  placeholderText: {
    fontSize: '16px',
    color: '#6b7280',
    marginBottom: '24px'
  },
  placeholderButton: {
    backgroundColor: '#9333ea',
    color: '#ffffff',
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer'
  },
  // New styles for additional features
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px'
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#111827',
    margin: 0
  },
  primaryButton: {
    backgroundColor: '#9333ea',
    color: '#ffffff',
    padding: '12px 20px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  secondaryButton: {
    backgroundColor: '#ffffff',
    color: '#6b7280',
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid #e5e7eb',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    border: '1px solid #f3f4f6',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    marginBottom: '24px'
  },
  cardHeader: {
    padding: '20px 24px',
    borderBottom: '1px solid #f3f4f6',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#111827',
    margin: 0
  },
  cardContent: {
    padding: '24px'
  },
  listItem: {
    padding: '16px 24px',
    borderBottom: '1px solid #f3f4f6',
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  listItemLast: {
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  avatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    border: '2px solid #e5e7eb'
  },
  statusBadge: {
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '500'
  },
  priorityBadge: {
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '500'
  },
  input: {
    width: '100%',
    padding: '8px 12px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    fontSize: '14px',
    fontFamily: 'inherit'
  },
  textarea: {
    width: '100%',
    padding: '8px 12px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    fontSize: '14px',
    fontFamily: 'inherit',
    resize: 'vertical',
    minHeight: '80px'
  },
  select: {
    padding: '8px 12px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    fontSize: '14px',
    fontFamily: 'inherit',
    backgroundColor: '#ffffff'
  },
  formGroup: {
    marginBottom: '16px'
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '6px'
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '32px',
    maxWidth: '600px',
    width: '90%',
    maxHeight: '80vh',
    overflow: 'auto'
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px'
  },
  modalTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#111827',
    margin: 0
  },
  modalActions: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'flex-end',
    marginTop: '24px'
  },
  toolbar: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    marginBottom: '24px',
    padding: '16px 24px',
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
    border: '1px solid #e5e7eb'
  },
  toolbarSearch: {
    flex: 1,
    padding: '8px 12px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    fontSize: '14px'
  },
  kanbanBoard: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '24px'
  },
  kanbanColumn: {
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
    padding: '16px',
    border: '1px solid #e5e7eb'
  },
  kanbanHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  },
  kanbanTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  kanbanCount: {
    backgroundColor: '#e5e7eb',
    color: '#6b7280',
    padding: '2px 8px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '500'
  },
  kanbanCard: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '12px',
    marginBottom: '12px',
    border: '1px solid #e5e7eb',
    cursor: 'pointer'
  },
  storyTitle: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#111827',
    marginBottom: '8px'
  },
  storyMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  storyPoints: {
    backgroundColor: '#f3e8ff',
    color: '#9333ea',
    padding: '2px 6px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '500'
  },
  assigneeAvatar: {
    width: '20px',
    height: '20px',
    borderRadius: '50%'
  }
};

// Enhanced Mock Data
const mockSprintData = [
  { day: 'Day 1', ideal: 100, actual: 100, remaining: 32 },
  { day: 'Day 2', ideal: 90, actual: 95, remaining: 30 },
  { day: 'Day 3', ideal: 80, actual: 85, remaining: 27 },
  { day: 'Day 4', ideal: 70, actual: 70, remaining: 24 },
  { day: 'Day 5', ideal: 60, actual: 60, remaining: 20 },
  { day: 'Day 6', ideal: 50, actual: 45, remaining: 16 },
  { day: 'Day 7', ideal: 40, actual: 35, remaining: 12 },
  { day: 'Day 8', ideal: 30, actual: 25, remaining: 8 },
  { day: 'Day 9', ideal: 20, actual: 15, remaining: 5 },
  { day: 'Day 10', ideal: 10, actual: 8, remaining: 2 },
];

const velocityData = [
  { sprint: 'Sprint 11', velocity: 25, completed: 23, committed: 28 },
  { sprint: 'Sprint 12', velocity: 28, completed: 28, committed: 30 },
  { sprint: 'Sprint 13', velocity: 32, completed: 30, committed: 32 },
  { sprint: 'Sprint 14', velocity: 30, completed: 28, committed: 30 },
  { sprint: 'Sprint 15', velocity: 35, completed: 35, committed: 36 },
];

const teamProductivityData = [
  { name: 'Development', value: 45, color: '#8b5cf6' },
  { name: 'Testing', value: 25, color: '#06b6d4' },
  { name: 'Review', value: 20, color: '#10b981' },
  { name: 'Blocked', value: 10, color: '#f59e0b' },
];

const mockTeamMembers = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Frontend Developer',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b85ca3b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    yesterday: 'Completed user authentication flow, fixed responsive layout issues',
    today: 'Working on dashboard navigation component, implementing dark mode toggle',
    blockers: 'Waiting for UX approval on navigation wireframes'
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'Backend Developer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    yesterday: 'Set up API authentication middleware, deployed staging environment',
    today: 'Building payment processing endpoints, database optimization',
    blockers: 'None - making good progress'
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'QA Engineer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    yesterday: 'Executed test cases for Sprint 14 features, reported 3 bugs',
    today: 'Testing new authentication system, preparing automation scripts',
    blockers: 'Need access to staging environment for payment testing'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'DevOps Engineer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    yesterday: 'Optimized CI/CD pipeline, reduced build time by 30%',
    today: 'Setting up monitoring dashboards, configuring SSL certificates',
    blockers: 'None'
  },
  {
    id: 5,
    name: 'Emily Watson',
    role: 'UX Designer',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    yesterday: 'Finalized payment flow wireframes, conducted user interviews',
    today: 'Creating high-fidelity mockups, updating design system',
    blockers: 'Waiting for stakeholder feedback on payment flow'
  }
];

const mockBacklogItems = [
  {
    id: 'US-001',
    title: 'User Registration with Email Verification',
    description: 'As a new user, I want to register with email verification so that my account is secure',
    priority: 'High',
    points: 5,
    status: 'Done',
    assignee: 'Sarah Chen',
    labels: ['Authentication', 'Security'],
    epic: 'User Management'
  },
  {
    id: 'US-002',
    title: 'Advanced Search with Filters',
    description: 'As a user, I want to search and filter content to find relevant information quickly',
    priority: 'High',
    points: 8,
    status: 'In Progress',
    assignee: 'Marcus Rodriguez',
    labels: ['Search', 'Performance'],
    epic: 'Search & Discovery'
  },
  {
    id: 'US-003',
    title: 'Payment Processing Integration',
    description: 'As a customer, I want to make secure payments to purchase premium features',
    priority: 'High',
    points: 13,
    status: 'In Progress',
    assignee: 'Marcus Rodriguez',
    labels: ['Payment', 'Integration'],
    epic: 'Monetization'
  },
  {
    id: 'US-004',
    title: 'Dark Mode Toggle',
    description: 'As a user, I want to switch between light and dark themes for better viewing experience',
    priority: 'Medium',
    points: 3,
    status: 'To Do',
    assignee: 'Sarah Chen',
    labels: ['UI', 'Accessibility'],
    epic: 'User Experience'
  },
  {
    id: 'US-005',
    title: 'Real-time Notifications',
    description: 'As a user, I want to receive real-time notifications about important updates',
    priority: 'Medium',
    points: 8,
    status: 'To Do',
    assignee: null,
    labels: ['Notifications', 'Real-time'],
    epic: 'Communication'
  },
  {
    id: 'US-006',
    title: 'Mobile App Responsive Design',
    description: 'As a mobile user, I want the app to work seamlessly on my device',
    priority: 'Medium',
    points: 5,
    status: 'Review',
    assignee: 'Sarah Chen',
    labels: ['Mobile', 'Responsive'],
    epic: 'Mobile Experience'
  },
  {
    id: 'US-007',
    title: 'Analytics Dashboard',
    description: 'As an admin, I want to view usage analytics to make informed decisions',
    priority: 'Low',
    points: 13,
    status: 'To Do',
    assignee: null,
    labels: ['Analytics', 'Admin'],
    epic: 'Business Intelligence'
  },
  {
    id: 'BUG-001',
    title: 'Fix Memory Leak in Search Component',
    description: 'Search component is causing memory leaks when performing multiple searches',
    priority: 'High',
    points: 2,
    status: 'To Do',
    assignee: 'David Kim',
    labels: ['Bug', 'Performance'],
    epic: 'Technical Debt'
  }
];

const AgilePilot = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentSprint, setCurrentSprint] = useState({
    name: 'Sprint 15 - Enhanced User Experience & Security',
    goal: 'Deliver secure authentication, advanced search capabilities, and payment infrastructure to enhance user experience and enable revenue generation',
    daysRemaining: 3,
    totalDays: 10,
    pointsCompleted: 23,
    totalPoints: 32,
    velocity: 35,
    confidenceLevel: 87,
    riskLevel: 'Medium'
  });

  const [teamMembers, setTeamMembers] = useState(mockTeamMembers);
  const [backlogItems, setBacklogItems] = useState(mockBacklogItems);
  const [showStandupForm, setShowStandupForm] = useState(false);
  const [showBacklogForm, setShowBacklogForm] = useState(false);
  const [showPlanningForm, setShowPlanningForm] = useState(false);
  const [editingStandup, setEditingStandup] = useState<typeof mockTeamMembers[0] | null>(null);
  const [editingBacklog, setEditingBacklog] = useState<typeof mockBacklogItems[0] | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterPriority, setFilterPriority] = useState('All');

  const [notifications, setNotifications] = useState([
    { 
      id: 1, 
      type: 'warning', 
      message: 'Sprint velocity tracking 12% above planned capacity - excellent progress', 
      priority: 'medium',
      timestamp: '2 hours ago'
    },
    { 
      id: 2, 
      type: 'info', 
      message: 'Daily standup summary generated and posted to #scrum-team channel', 
      priority: 'low',
      timestamp: '3 hours ago'
    },
    { 
      id: 3, 
      type: 'critical', 
      message: 'Critical blocker detected: UX approval overdue by 2 days', 
      priority: 'high',
      timestamp: '4 hours ago'
    }
  ]);

  useEffect(() => {
    document.body.style.background = styles.body.background as string;
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.fontFamily = styles.body.fontFamily as string;

    const styleSheet = document.createElement('style');
    styleSheet.innerText = `
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      if (document.head.contains(styleSheet)) {
        document.head.removeChild(styleSheet);
      }
    };
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Done': return { backgroundColor: '#dcfce7', color: '#16a34a' };
      case 'In Progress': return { backgroundColor: '#dbeafe', color: '#2563eb' };
      case 'Review': return { backgroundColor: '#fef3c7', color: '#d97706' };
      case 'To Do': return { backgroundColor: '#f3f4f6', color: '#6b7280' };
      default: return { backgroundColor: '#f3f4f6', color: '#6b7280' };
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return { backgroundColor: '#fecaca', color: '#dc2626' };
      case 'Medium': return { backgroundColor: '#fed7aa', color: '#ea580c' };
      case 'Low': return { backgroundColor: '#d1fae5', color: '#059669' };
      default: return { backgroundColor: '#f3f4f6', color: '#6b7280' };
    }
  };

  const filteredBacklogItems = backlogItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || item.status === filterStatus;
    const matchesPriority = filterPriority === 'All' || item.priority === filterPriority;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const groupedBacklogItems = {
    'To Do': filteredBacklogItems.filter(item => item.status === 'To Do'),
    'In Progress': filteredBacklogItems.filter(item => item.status === 'In Progress'),
    'Review': filteredBacklogItems.filter(item => item.status === 'Review'),
    'Done': filteredBacklogItems.filter(item => item.status === 'Done')
  };

  const renderDashboard = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Hero Sprint Card */}
      <div style={styles.heroCard}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <div style={styles.heroHeader}>
              <Target style={{ width: '24px', height: '24px', marginRight: '8px' }} />
              <span style={{ fontSize: '14px', fontWeight: '500', color: '#c7d2fe' }}>ACTIVE SPRINT</span>
            </div>
            <h2 style={styles.heroTitle}>{currentSprint.name}</h2>
            <p style={styles.heroSubtitle}>{currentSprint.goal}</p>
            <div style={styles.heroMetrics}>
              <div style={styles.heroMetric}>
                <Clock style={{ width: '16px', height: '16px', color: '#c7d2fe' }} />
                <span>Progress: Day {currentSprint.totalDays - currentSprint.daysRemaining} of {currentSprint.totalDays}</span>
              </div>
              <div style={styles.heroMetric}>
                <TrendingUp style={{ width: '16px', height: '16px', color: '#c7d2fe' }} />
                <span>Confidence: {currentSprint.confidenceLevel}%</span>
              </div>
            </div>
          </div>
          <div style={styles.heroRight}>
            <div style={styles.heroDaysRemaining}>{currentSprint.daysRemaining}</div>
            <div style={styles.heroDaysLabel}>days remaining</div>
            <div style={styles.heroRiskBadge}>
              {currentSprint.riskLevel} Risk
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div style={styles.metricsGrid}>
        <div style={styles.metricCard}>
          <div style={styles.metricHeader}>
            <div>
              <p style={styles.metricLabel}>Sprint Progress</p>
              <p style={styles.metricValue}>
                {Math.round((currentSprint.pointsCompleted / currentSprint.totalPoints) * 100)}%
              </p>
              <p style={styles.metricSubtext}>
                {currentSprint.pointsCompleted} of {currentSprint.totalPoints} points
              </p>
            </div>
            <div style={{...styles.metricIcon, backgroundColor: '#dcfce7'}}>
              <Target style={{ width: '32px', height: '32px', color: '#16a34a' }} />
            </div>
          </div>
          <div style={styles.progressBar}>
            <div 
              style={{
                ...styles.progressFill,
                width: `${(currentSprint.pointsCompleted / currentSprint.totalPoints) * 100}%`
              }}
            />
          </div>
        </div>

        <div style={styles.metricCard}>
          <div style={styles.metricHeader}>
            <div>
              <p style={styles.metricLabel}>Team Velocity</p>
              <p style={styles.metricValue}>{currentSprint.velocity}</p>
              <p style={{...styles.metricSubtext, color: '#16a34a', display: 'flex', alignItems: 'center', gap: '4px'}}>
                <TrendingUp style={{ width: '12px', height: '12px' }} />
                +12% vs last sprint
              </p>
            </div>
            <div style={{...styles.metricIcon, backgroundColor: '#dbeafe'}}>
              <Activity style={{ width: '32px', height: '32px', color: '#2563eb' }} />
            </div>
          </div>
        </div>

        <div style={styles.metricCard}>
          <div style={styles.metricHeader}>
            <div>
              <p style={styles.metricLabel}>Code Quality</p>
              <p style={styles.metricValue}>94%</p>
              <p style={styles.metricSubtext}>Test coverage: 87%</p>
            </div>
            <div style={{...styles.metricIcon, backgroundColor: '#f3e8ff'}}>
              <Shield style={{ width: '32px', height: '32px', color: '#9333ea' }} />
            </div>
          </div>
        </div>

        <div style={styles.metricCard}>
          <div style={styles.metricHeader}>
            <div>
              <p style={styles.metricLabel}>Active Issues</p>
              <p style={styles.metricValue}>2</p>
              <p style={{...styles.metricSubtext, color: '#ea580c'}}>1 critical blocker</p>
            </div>
            <div style={{...styles.metricIcon, backgroundColor: '#fed7aa'}}>
              <AlertTriangle style={{ width: '32px', height: '32px', color: '#ea580c' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div style={styles.chartsGrid}>
        <div style={styles.chartCard}>
          <div style={styles.chartHeader}>
            <h3 style={styles.chartTitle}>Sprint Burndown Analysis</h3>
            <div style={styles.chartActions}>
              <button style={styles.chartAction}>
                <RefreshCw style={{ width: '16px', height: '16px' }} />
              </button>
              <button style={styles.chartAction}>
                <Download style={{ width: '16px', height: '16px' }} />
              </button>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={mockSprintData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" tick={{fontSize: 12}} />
              <YAxis tick={{fontSize: 12}} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="ideal" 
                stroke="#94a3b8" 
                strokeDasharray="5 5" 
                strokeWidth={2}
                name="Ideal Burndown" 
              />
              <Line 
                type="monotone" 
                dataKey="actual" 
                stroke="#6366f1" 
                strokeWidth={3}
                name="Actual Progress" 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={styles.chartCard}>
          <h3 style={{...styles.chartTitle, marginBottom: '24px'}}>Team Productivity</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={teamProductivityData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {teamProductivityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div style={styles.pieChartLegend}>
            {teamProductivityData.map((item, index) => (
              <div key={index} style={styles.legendItem}>
                <div style={styles.legendLabel}>
                  <div 
                    style={{
                      ...styles.legendColor,
                      backgroundColor: item.color
                    }}
                  />
                  <span style={styles.legendText}>{item.name}</span>
                </div>
                <span style={styles.legendValue}>{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Velocity Trend */}
      <div style={styles.chartCard}>
        <h3 style={{...styles.chartTitle, marginBottom: '24px'}}>Velocity Trend Analysis</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={velocityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="sprint" tick={{fontSize: 12}} />
            <YAxis tick={{fontSize: 12}} />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Legend />
            <Bar dataKey="committed" fill="#e5e7eb" name="Committed Points" />
            <Bar dataKey="completed" fill="#8b5cf6" name="Completed Points" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* AI Insights */}
      <div style={styles.insightsCard}>
        <div style={styles.insightsHeader}>
          <div style={styles.insightsIcon}>
            <Brain style={{ width: '24px', height: '24px', color: '#9333ea' }} />
          </div>
          <h3 style={styles.insightsTitle}>AgilePilot Insights & Recommendations</h3>
        </div>
        <div style={styles.insightsGrid}>
          <div style={styles.insightItemWarning}>
            <div style={styles.insightContent}>
              <AlertTriangle style={{ width: '20px', height: '20px', color: '#d97706', ...styles.insightIcon }} />
              <div style={{ flex: 1 }}>
                <h4 style={{...styles.insightTitle, color: '#92400e'}}>Velocity Alert</h4>
                <p style={{...styles.insightText, color: '#a16207'}}>
                  Current sprint velocity is tracking 12% above team average. While this indicates strong performance, 
                  monitor for potential burnout and ensure sustainable pace.
                </p>
                <div style={styles.insightActions}>
                  <button style={{...styles.insightButton, ...styles.insightButtonPrimary}}>
                    View Details
                  </button>
                  <button style={{...styles.insightButton, ...styles.insightButtonSecondary}}>
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.insightItemBlue}>
            <div style={styles.insightContent}>
              <TrendingUp style={{ width: '20px', height: '20px', color: '#2563eb', ...styles.insightIcon }} />
              <div style={{ flex: 1 }}>
                <h4 style={{...styles.insightTitle, color: '#1e40af'}}>Quality Trend</h4>
                <p style={{...styles.insightText, color: '#1d4ed8'}}>
                  Code review cycle time has improved by 25% this sprint. Test coverage increased to 87%. 
                  Consider implementing automated quality gates for continuous improvement.
                </p>
                <div style={styles.insightActions}>
                  <button style={{...styles.insightButton, backgroundColor: '#2563eb', color: '#ffffff'}}>
                    Implement Gates
                  </button>
                  <button style={{...styles.insightButton, backgroundColor: 'transparent', color: '#1d4ed8'}}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStandups = () => (
    <div>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>Daily Standups</h2>
        <button 
          style={styles.primaryButton}
          onClick={() => setShowStandupForm(true)}
        >
          <Plus style={{ width: '16px', height: '16px' }} />
          Add Update
        </button>
      </div>

      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h3 style={styles.cardTitle}>Today's Standup - Sprint 15, Day 8</h3>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={styles.secondaryButton}>
              <MessageSquare style={{ width: '16px', height: '16px' }} />
              Post to Slack
            </button>
            <button style={styles.secondaryButton}>
              <Download style={{ width: '16px', height: '16px' }} />
              Export
            </button>
          </div>
        </div>
        
        {teamMembers.map((member, index) => (
          <div 
            key={member.id} 
            style={index === teamMembers.length - 1 ? styles.listItemLast : styles.listItem}
          >
            <img src={member.avatar} alt={member.name} style={styles.avatar} />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div>
                  <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#111827' }}>
                    {member.name}
                  </h4>
                  <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>
                    {member.role}
                  </p>
                </div>
                <button 
                  style={styles.secondaryButton}
                  onClick={() => {
                    setEditingStandup(member);
                    setShowStandupForm(true);
                  }}
                >
                  <Edit style={{ width: '14px', height: '14px' }} />
                  Edit
                </button>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginTop: '12px' }}>
                <div>
                  <h5 style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>
                    Yesterday
                  </h5>
                  <p style={{ margin: 0, fontSize: '14px', color: '#374151', lineHeight: '1.5' }}>
                    {member.yesterday}
                  </p>
                </div>
                <div>
                  <h5 style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>
                    Today
                  </h5>
                  <p style={{ margin: 0, fontSize: '14px', color: '#374151', lineHeight: '1.5' }}>
                    {member.today}
                  </p>
                </div>
                <div>
                  <h5 style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>
                    Blockers
                  </h5>
                  <p style={{ 
                    margin: 0, 
                    fontSize: '14px', 
                    color: member.blockers.toLowerCase().includes('none') ? '#16a34a' : '#dc2626',
                    lineHeight: '1.5'
                  }}>
                    {member.blockers}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Summary */}
      <div style={styles.insightsCard}>
        <div style={styles.insightsHeader}>
          <div style={styles.insightsIcon}>
            <Brain style={{ width: '24px', height: '24px', color: '#9333ea' }} />
          </div>
          <h3 style={styles.insightsTitle}>AI Standup Summary</h3>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div style={styles.insightItemBlue}>
            <div style={styles.insightContent}>
              <TrendingUp style={{ width: '20px', height: '20px', color: '#2563eb', ...styles.insightIcon }} />
              <div style={{ flex: 1 }}>
                <h4 style={{...styles.insightTitle, color: '#1e40af'}}>Progress Highlights</h4>
                <ul style={{ margin: '0 0 12px 0', paddingLeft: '16px', color: '#1d4ed8' }}>
                  <li>Authentication flow completed (Sarah)</li>
                  <li>API middleware deployed to staging (Marcus)</li>
                  <li>CI/CD pipeline optimized, 30% faster builds (David)</li>
                  <li>Payment flow wireframes finalized (Emily)</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={styles.insightItemWarning}>
            <div style={styles.insightContent}>
              <AlertTriangle style={{ width: '20px', height: '20px', color: '#d97706', ...styles.insightIcon }} />
              <div style={{ flex: 1 }}>
                <h4 style={{...styles.insightTitle, color: '#92400e'}}>Action Items</h4>
                <ul style={{ margin: '0 0 12px 0', paddingLeft: '16px', color: '#a16207' }}>
                  <li>UX approval needed for navigation wireframes</li>
                  <li>Staging environment access for QA testing</li>
                  <li>Stakeholder feedback on payment flow</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Standup Form Modal */}
      {showStandupForm && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <div style={styles.modalHeader}>
              <h3 style={styles.modalTitle}>
                {editingStandup ? `Update ${editingStandup.name}'s Standup` : 'Add Standup Update'}
              </h3>
              <button 
                onClick={() => {
                  setShowStandupForm(false);
                  setEditingStandup(null);
                }}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <X style={{ width: '20px', height: '20px' }} />
              </button>
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Team Member</label>
              <select style={styles.select}>
                {teamMembers.map(member => (
                  <option key={member.id} value={member.id}>
                    {member.name} - {member.role}
                  </option>
                ))}
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>What did you accomplish yesterday?</label>
              <textarea 
                style={styles.textarea}
                placeholder="Describe your accomplishments from yesterday..."
                defaultValue={editingStandup?.yesterday || ''}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>What will you work on today?</label>
              <textarea 
                style={styles.textarea}
                placeholder="Describe your plans for today..."
                defaultValue={editingStandup?.today || ''}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Any blockers or impediments?</label>
              <textarea 
                style={styles.textarea}
                placeholder="Describe any blockers or write 'None' if no blockers..."
                defaultValue={editingStandup?.blockers || ''}
              />
            </div>

            <div style={styles.modalActions}>
              <button 
                style={styles.secondaryButton}
                onClick={() => {
                  setShowStandupForm(false);
                  setEditingStandup(null);
                }}
              >
                Cancel
              </button>
              <button style={styles.primaryButton}>
                <Save style={{ width: '16px', height: '16px' }} />
                Save Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderBacklog = () => (
    <div>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>Product Backlog</h2>
        <button 
          style={styles.primaryButton}
          onClick={() => setShowBacklogForm(true)}
        >
          <Plus style={{ width: '16px', height: '16px' }} />
          Add Story
        </button>
      </div>

      {/* Toolbar */}
      <div style={styles.toolbar}>
        <input
          type="text"
          placeholder="Search stories..."
          style={styles.toolbarSearch}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select 
          style={styles.select}
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Review">Review</option>
          <option value="Done">Done</option>
        </select>
        <select 
          style={styles.select}
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
        >
          <option value="All">All Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {/* Kanban Board */}
      <div style={styles.kanbanBoard}>
        {Object.entries(groupedBacklogItems).map(([status, items]) => (
          <div key={status} style={styles.kanbanColumn}>
            <div style={styles.kanbanHeader}>
              <span style={styles.kanbanTitle}>{status}</span>
              <span style={styles.kanbanCount}>{items.length}</span>
            </div>
            
            {items.map(item => (
              <div 
                key={item.id} 
                style={styles.kanbanCard}
                onClick={() => {
                  setEditingBacklog(item);
                  setShowBacklogForm(true);
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '500', color: '#6b7280' }}>
                    {item.id}
                  </span>
                  <span 
                    style={{
                      ...styles.priorityBadge,
                      ...getPriorityColor(item.priority)
                    }}
                  >
                    {item.priority}
                  </span>
                </div>
                
                <h4 style={styles.storyTitle}>{item.title}</h4>
                
                <p style={{ 
                  fontSize: '12px', 
                  color: '#6b7280', 
                  marginBottom: '12px',
                  lineHeight: '1.4'
                }}>
                  {item.description.substring(0, 80)}...
                </p>
                
                <div style={{ marginBottom: '8px' }}>
                  {item.labels.map(label => (
                    <span 
                      key={label}
                      style={{
                        fontSize: '10px',
                        padding: '2px 6px',
                        backgroundColor: '#f3f4f6',
                        color: '#6b7280',
                        borderRadius: '4px',
                        marginRight: '4px'
                      }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
                
                <div style={styles.storyMeta}>
                  <span style={styles.storyPoints}>{item.points} pts</span>
                  {item.assignee && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <User style={{ width: '12px', height: '12px', color: '#6b7280' }} />
                      <span style={{ fontSize: '10px', color: '#6b7280' }}>
                        {item.assignee.split(' ')[0]}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Backlog Form Modal */}
      {showBacklogForm && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <div style={styles.modalHeader}>
              <h3 style={styles.modalTitle}>
                {editingBacklog ? 'Edit User Story' : 'Add New User Story'}
              </h3>
              <button 
                onClick={() => {
                  setShowBacklogForm(false);
                  setEditingBacklog(null);
                }}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <X style={{ width: '20px', height: '20px' }} />
              </button>
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Story Title</label>
              <input 
                type="text"
                style={styles.input}
                placeholder="As a user, I want to..."
                defaultValue={editingBacklog?.title || ''}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Description</label>
              <textarea 
                style={styles.textarea}
                placeholder="Provide detailed description and acceptance criteria..."
                defaultValue={editingBacklog?.description || ''}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Priority</label>
                <select style={styles.select} defaultValue={editingBacklog?.priority || 'Medium'}>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Story Points</label>
                <select style={styles.select} defaultValue={editingBacklog?.points || 3}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={5}>5</option>
                  <option value={8}>8</option>
                  <option value={13}>13</option>
                  <option value={21}>21</option>
                </select>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Status</label>
                <select style={styles.select} defaultValue={editingBacklog?.status || 'To Do'}>
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Review">Review</option>
                  <option value="Done">Done</option>
                </select>
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Assignee</label>
              <select style={styles.select}>
                <option value="">Unassigned</option>
                {teamMembers.map(member => (
                  <option key={member.id} value={member.name}>
                    {member.name}
                  </option>
                ))}
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Epic</label>
              <input 
                type="text"
                style={styles.input}
                placeholder="e.g., User Management"
                defaultValue={editingBacklog?.epic || ''}
              />
            </div>

            <div style={styles.modalActions}>
              <button 
                style={styles.secondaryButton}
                onClick={() => {
                  setShowBacklogForm(false);
                  setEditingBacklog(null);
                }}
              >
                Cancel
              </button>
              <button style={styles.primaryButton}>
                <Save style={{ width: '16px', height: '16px' }} />
                {editingBacklog ? 'Update Story' : 'Create Story'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderSprintPlanning = () => (
    <div>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>Sprint Planning</h2>
        <button 
          style={styles.primaryButton}
          onClick={() => setShowPlanningForm(true)}
        >
          <Calendar style={{ width: '16px', height: '16px' }} />
          Plan Next Sprint
        </button>
      </div>

      {/* Current Sprint Overview */}
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h3 style={styles.cardTitle}>Current Sprint (Sprint 15)</h3>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span style={{...styles.statusBadge, ...getStatusColor('In Progress')}}>
              In Progress
            </span>
          </div>
        </div>
        <div style={styles.cardContent}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '24px' }}>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600', color: '#6b7280' }}>
                Sprint Goal
              </h4>
              <p style={{ margin: 0, fontSize: '16px', color: '#111827', lineHeight: '1.5' }}>
                {currentSprint.goal}
              </p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600', color: '#6b7280' }}>
                Capacity
              </h4>
              <p style={{ margin: 0, fontSize: '24px', fontWeight: '700', color: '#111827' }}>
                {currentSprint.totalPoints} pts
              </p>
              <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>
                {Math.round((currentSprint.pointsCompleted / currentSprint.totalPoints) * 100)}% completed
              </p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600', color: '#6b7280' }}>
                Timeline
              </h4>
              <p style={{ margin: 0, fontSize: '16px', color: '#111827' }}>
                Day {currentSprint.totalDays - currentSprint.daysRemaining} of {currentSprint.totalDays}
              </p>
              <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>
                {currentSprint.daysRemaining} days remaining
              </p>
            </div>
          </div>
          
          <div style={styles.progressBar}>
            <div 
              style={{
                ...styles.progressFill,
                width: `${(currentSprint.pointsCompleted / currentSprint.totalPoints) * 100}%`
              }}
            />
          </div>
        </div>
      </div>

      {/* Team Capacity Planning */}
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h3 style={styles.cardTitle}>Team Capacity Analysis</h3>
        </div>
        <div style={styles.cardContent}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {teamMembers.map(member => (
              <div key={member.id} style={{
                padding: '16px',
                backgroundColor: '#f9fafb',
                borderRadius: '8px',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <img src={member.avatar} alt={member.name} style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#111827' }}>
                      {member.name}
                    </h4>
                    <p style={{ margin: 0, fontSize: '12px', color: '#6b7280' }}>
                      {member.role}
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', color: '#6b7280' }}>Capacity</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#111827' }}>
                    {Math.floor(Math.random() * 10) + 5} pts/sprint
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                  <span style={{ fontSize: '12px', color: '#6b7280' }}>Velocity</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#16a34a' }}>
                    {Math.floor(Math.random() * 8) + 4} pts avg
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sprint Candidates */}
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h3 style={styles.cardTitle}>Sprint 16 Planning Candidates</h3>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>
              Total: {backlogItems.filter(item => item.status === 'To Do').reduce((acc, item) => acc + item.points, 0)} points
            </span>
          </div>
        </div>
        
        {backlogItems.filter(item => item.status === 'To Do').slice(0, 6).map((item, index) => (
          <div 
            key={item.id} 
            style={index === 5 ? styles.listItemLast : styles.listItem}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
              <CheckSquare style={{ width: '16px', height: '16px', color: '#9333ea', cursor: 'pointer' }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'flex-start', marginBottom: '4px' }}>
                  <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '500', color: '#111827' }}>
                    {item.title}
                  </h4>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span 
                      style={{
                        ...styles.priorityBadge,
                        ...getPriorityColor(item.priority)
                      }}
                    >
                      {item.priority}
                    </span>
                    <span style={styles.storyPoints}>{item.points} pts</span>
                  </div>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: '#6b7280', lineHeight: '1.4' }}>
                  {item.description}
                </p>
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  {item.labels.map(label => (
                    <span 
                      key={label}
                      style={{
                        fontSize: '10px',
                        padding: '2px 6px',
                        backgroundColor: '#f3f4f6',
                        color: '#6b7280',
                        borderRadius: '4px'
                      }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Historical Sprint Data */}
      <div style={styles.chartCard}>
        <h3 style={{...styles.chartTitle, marginBottom: '24px'}}>Sprint Planning History</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={velocityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="sprint" tick={{fontSize: 12}} />
            <YAxis tick={{fontSize: 12}} />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Legend />
            <Bar dataKey="committed" fill="#e5e7eb" name="Committed Points" />
            <Bar dataKey="completed" fill="#8b5cf6" name="Completed Points" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* AI Planning Insights */}
      <div style={styles.insightsCard}>
        <div style={styles.insightsHeader}>
          <div style={styles.insightsIcon}>
            <Brain style={{ width: '24px', height: '24px', color: '#9333ea' }} />
          </div>
          <h3 style={styles.insightsTitle}>Sprint 16 Planning Recommendations</h3>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div style={styles.insightItemBlue}>
            <div style={styles.insightContent}>
              <Target style={{ width: '20px', height: '20px', color: '#2563eb', ...styles.insightIcon }} />
              <div style={{ flex: 1 }}>
                <h4 style={{...styles.insightTitle, color: '#1e40af'}}>Recommended Capacity</h4>
                <p style={{...styles.insightText, color: '#1d4ed8'}}>
                  Based on team velocity (35 pts avg) and current workload, recommend committing to 32-36 points for Sprint 16. 
                  Focus on high-priority user stories to maximize business value.
                </p>
              </div>
            </div>
          </div>

          <div style={styles.insightItemWarning}>
            <div style={styles.insightContent}>
              <AlertTriangle style={{ width: '20px', height: '20px', color: '#d97706', ...styles.insightIcon }} />
              <div style={{ flex: 1 }}>
                <h4 style={{...styles.insightTitle, color: '#92400e'}}>Risk Factors</h4>
                <p style={{...styles.insightText, color: '#a16207'}}>
                  Payment integration (13 pts) is high complexity. Consider breaking into smaller stories. 
                  UX dependencies identified for 2 stories - ensure design approval before sprint start.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sprint Planning Form Modal */}
      {showPlanningForm && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <div style={styles.modalHeader}>
              <h3 style={styles.modalTitle}>Plan Sprint 16</h3>
              <button 
                onClick={() => setShowPlanningForm(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <X style={{ width: '20px', height: '20px' }} />
              </button>
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Sprint Name</label>
              <input 
                type="text"
                style={styles.input}
                placeholder="e.g., Sprint 16 - Payment Integration & Mobile Optimization"
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Sprint Goal</label>
              <textarea 
                style={styles.textarea}
                placeholder="Define the sprint goal and main objectives..."
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Sprint Duration</label>
                <select style={styles.select}>
                  <option value={10}>2 weeks (10 days)</option>
                  <option value={15}>3 weeks (15 days)</option>
                  <option value={20}>4 weeks (20 days)</option>
                </select>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Team Capacity</label>
                <input 
                  type="number"
                  style={styles.input}
                  placeholder="35"
                  defaultValue={35}
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Selected Stories (drag from candidates above)</label>
              <div style={{
                minHeight: '120px',
                border: '2px dashed #e5e7eb',
                borderRadius: '8px',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280'
              }}>
                Drop user stories here to add to sprint
              </div>
            </div>

            <div style={styles.modalActions}>
              <button 
                style={styles.secondaryButton}
                onClick={() => setShowPlanningForm(false)}
              >
                Cancel
              </button>
              <button style={styles.primaryButton}>
                <Calendar style={{ width: '16px', height: '16px' }} />
                Create Sprint
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'standups', label: 'Daily Standups', icon: MessageSquare },
    { id: 'backlog', label: 'Backlog', icon: CheckCircle },
    { id: 'planning', label: 'Sprint Planning', icon: Calendar },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>
              <Brain style={{ width: '32px', height: '32px', color: '#ffffff' }} />
            </div>
            <div>
              <h1 style={styles.logoText}>AgilePilot</h1>
              <p style={styles.logoSubtext}>AI-Powered Enterprise Agile Management Platform</p>
            </div>
          </div>
          <div style={styles.userSection}>
            {notifications.length > 0 && (
              <div style={styles.notificationBell}>
                <Bell style={{ width: '24px', height: '24px' }} />
                <div style={styles.notificationBadge}>
                  {notifications.length}
                </div>
              </div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img
                style={styles.userAvatar}
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User avatar"
              />
              <div>
                <span style={styles.userName}>David Chen</span>
                <p style={styles.userRole}>Senior Scrum Master</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div style={styles.mainContainer}>
        {/* Sidebar */}
        <nav style={styles.sidebar}>
          <div style={styles.sidebarCard}>
            <div>
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      ...styles.tabButton,
                      ...(isActive ? styles.tabButtonActive : styles.tabButtonInactive)
                    }}
                  >
                    <Icon style={{ width: '20px', height: '20px', marginRight: '12px' }} />
                    {tab.label}
                    {isActive && (
                      <ChevronRight style={{ width: '16px', height: '16px', marginLeft: 'auto' }} />
                    )}
                  </button>
                );
              })}
            </div>
            
            {/* Quick Stats */}
            <div>
              <h3 style={styles.quickStatsHeader}>
                Quick Overview
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={styles.quickStatItem}>
                  <span style={styles.quickStatLabel}>Active Sprint</span>
                  <span style={{...styles.quickStatValue, color: '#111827'}}>Day 8/10</span>
                </div>
                <div style={styles.quickStatItem}>
                  <span style={styles.quickStatLabel}>Sprint Progress</span>
                  <span style={{...styles.quickStatValue, color: '#16a34a'}}>72%</span>
                </div>
                <div style={styles.quickStatItem}>
                  <span style={styles.quickStatLabel}>Team Velocity</span>
                  <span style={{...styles.quickStatValue, color: '#2563eb'}}>35 pts</span>
                </div>
                <div style={styles.quickStatItem}>
                  <span style={styles.quickStatLabel}>Open Blockers</span>
                  <span style={{...styles.quickStatValue, color: '#ea580c'}}>2</span>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main style={styles.main}>
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'standups' && renderStandups()}
          {activeTab === 'backlog' && renderBacklog()}
          {activeTab === 'planning' && renderSprintPlanning()}
          {activeTab === 'settings' && (
            <div style={styles.placeholderCard}>
              <div style={styles.placeholderIcon}>
                <Settings style={{ width: '32px', height: '32px', color: '#9333ea' }} />
              </div>
              <h3 style={styles.placeholderTitle}>Settings</h3>
              <p style={styles.placeholderText}>
                Configure team settings, integrations, and AI preferences.
              </p>
              <button 
                onClick={() => setActiveTab('dashboard')}
                style={styles.placeholderButton}
              >
                Return to Dashboard
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AgilePilot;