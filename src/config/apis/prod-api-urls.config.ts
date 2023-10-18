export const config = {
  AGENT_CTC_BASE_URL:
    'https://hrmsqa.policybazaar.com/HRMS-Emp/api/EmpExt/GetAgentCTCDetails',
  CTC_INCENTIVE_URL:
    'https://incentiveapi.policybazaar.com/api/Incentive/DecryptData',
  AWS_CREDENTIALS_URL:
    'http://169.254.169.254/latest/meta-data/iam/security-credentials/matrixlive-api-role',
  dialerApiUrlV1: 'http://dialerapi.policybazaar.com/api/dialer/',
  dialerApiUrlV2: 'https://dialerapi.policybazaar.com/api/v2/',
  BMSTicket: 'https://ticketservice.policybazaar.com/',
  VERIFY_TOKEN_MTX:
    'https://internalcustomernotification.policybazaar.com/customer/verifytoken/',
  VERIFY_TOKEN_BMS:
    'https://bmsappservice.policybazaar.com/api/Utility/CheckUserLogin',
  VERIFY_TOKEN_DIALER:
    'https://dialerapi.policybazaar.com/api/v2/dialer/validateToken',
  VERIFY_TOKEN_CLAIM: 'https://claimapi.policybazaar.com/Login/IsValidAgent',
  MATRIXCOREAPI: 'https://internalmatrixapi.policybazaar.com',
  REGISTER_CUSTOMER:
    'https://api.policybazaar.com/cs/customer/registerCustomer',
  BMS_STATUS_MY_BOOKING:
    'https://matrixcoreapi.policybazaar.com/api/LeadDetails/GetbmsLink',
  AUTO_PAY_API: 'https://pg.policybazaar.com/pgi/si/autopayInfo',
  BMS_DOC_POINT_API:
    'https://docpoint.policybazaar.com/coreapi/api/RedirectToDocpoint',
  AWS_SQS_LOGGING:
    'https://sqs.ap-south-1.amazonaws.com/721537467949/LoggingQueue',
  ADD_LEAD_TO_PRIORITYQUEUE:
    'https://matrixliveapi.policybazaar.com/communication/LeadPrioritization.svc/AddLeadToPriorityQueue',
  AWS_ENV_CONFIG_SECRET:
    'arn:aws:secretsmanager:ap-south-1:721537467949:secret:Prod_MatrixDashboard-DYjpH3',
  Comm_Api: 'https://matrixliveapi.policybazaar.com/Communication/',
  INTERNAL_DOMAIN_VALUE: 'mobilematrix.policybazaar.com',
  MATRIX_DASHBOARD_BASEURL: 'https://matrixdashboard.policybazaar.com',
  BMS_SERVICE_URL: 'https://bmsappservice2.policybazaar.com/',
  MATRIX_CORE_URL: 'https://matrixcoreapi.policybazaar.com',
  BMS_SEND_COMMUNICATION_URL:
    'https://pbserviceapi.policybazaar.com/sendcommunication',
  GET_VERIFICATION_CAMPAIGN:
    'https://matrixcoreapi.policybazaar.com/api/Bms/GetLeadCallTransferInfo',
};
