export type ApiError = {
  code: string;
  details: ApiErrorDetail;
  message: string;
  meta: {
    path: string;
    timestamp: string;
  };
  success: boolean;
};

export type ApiErrorDetail = {
  constraints: {
    whitelistValidation: string;
  };
  property: string;
  value: string;
};
