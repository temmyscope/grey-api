export const statusCode = Object.freeze({
  OK: 200, CREATED: 201, DELETED: 204, UPDATED: 205,
  BAD_REQUEST: 400, UNAUTHORIZED: 401, PAYMENT_REQUIRED: 402, BLOCKED: 403, NOT_FOUND: 404, 
  METHOD_NOT_ALLOWED: 405, VALIDATION_ERROR: 422, LIMIT_EXCEED: 429, INTERNAL_ERROR: 500
});

export const TRANSACTION_STATUS = Object.freeze({
  SUCCESS:    'successful',
  PENDING:     'pending',
  FAILED:      'failed'
});

export const TRANSACTION_TYPE = Object.freeze({
  Transfer: 'transfer', Topup: 'topup', Withdraw: 'withdraw'
});