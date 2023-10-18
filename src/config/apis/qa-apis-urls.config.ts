export const config = {
  AGENT_CTC_BASE_URL:
    'https://hrmsqa.policybazaar.com/HRMS-Emp/api/EmpExt/GetAgentCTCDetails',
  CTC_INCENTIVE_URL:
    'https://incentiveapiqa.policybazaar.com/api/Incentive/DecryptData',
  AWS_CREDENTIALS_URL:
    'http://169.254.169.254/latest/meta-data/iam/security-credentials/matrixlive-api-role',
  dialerApiUrlV2: 'https://dialerqaapi.policybazaar.com/api/v2/',
  BMS_SEND_COMMUNICATION_URL:
    'https://pbqaserviceapi.policybazaar.com/sendcommunication',
  BMSTicket: 'https://ticketservice.policybazaar.com/',
  VERIFY_TOKEN_MTX:
    'https://internalcustomernotificationqa.policybazaar.com/customer/verifytoken/',
  VERIFY_TOKEN_BMS:
    'https://bmsv2testservice.policybazaar.com/api/Utility/CheckUserLogin',
  VERIFY_TOKEN_DIALER:
    'https://dialerapi.policybazaar.com/api/v2/dialer/validateToken',
  VERIFY_TOKEN_CLAIM: 'https://claimqaapi.policybazaar.com/Login/IsValidAgent',
  MATRIXCOREAPI: 'https://qainternalmatrixapi.policybazaar.com',
  REGISTER_CUSTOMER:
    'https://apiqa.policybazaar.com/cs/customer/registerCustomer',
  BMS_STATUS_MY_BOOKING:
    'https://qamatrixcoreapi.policybazaar.com/api/LeadDetails/GetbmsLink',
  AUTO_PAY_API: 'https://pgqa.policybazaar.com/pgi/si/autopayInfo',
  BMS_DOC_POINT_API:
    'https://docpointqa.policybazaar.com/coreapi/api/RedirectToDocpoint',
  BMS_VERIFICATION_STATUS_URL:
    'https://bmsappservcice2qa.policybazaar.com/api/Partner/InsertUpdateVerificationStatus',
  AWS_SQS_LOGGING: '',
  ADD_LEAD_TO_PRIORITYQUEUE:
    'https://progressiveqa.policybazaar.com/communication/LeadPrioritization.svc/AddLeadToPriorityQueue',
  AWS_ENV_CONFIG_SECRET:
    'arn:aws:secretsmanager:ap-south-1:721537467949:secret:QA_MatrixDashboard-Cf0Tf8',
  Comm_Api: 'https://progressiveqa.policybazaar.com/Communication/',
  MATRIX_DASHBOARD_BASEURL: 'https://matrixdashboardqa.policybazaar.com',
  BMS_SERVICE_URL: 'https://bmsappservcice2qa.policybazaar.com/',
  MATRIX_CORE_URL: 'https://qamatrixcoreapi.policybazaar.com',
  GET_VERIFICATION_CAMPAIGN:
    'https://qamatrixcoreapi.policybazaar.com/api/Bms/GetLeadCallTransferInfo',
};
