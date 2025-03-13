interface Window {
  Instamojo?: {
    configure: (options: InstamojoOptions) => void;
    open: (url: string) => void;
  };
}

interface InstamojoOptions {
  handlers: {
    onOpen?: () => void;
    onClose?: () => void;
    onSuccess?: (response: InstamojoResponse) => void;
    onFailure?: (response: InstamojoResponse) => void;
  };
}

interface InstamojoResponse {
  paymentId: string;
  status: string;
  [key: string]: unknown; // For any additional properties
}