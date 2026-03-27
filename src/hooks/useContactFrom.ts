import { useState } from "react";
import { axiosInstance } from "@/lib/axios";

// Updated: replaced `subject` with `projectType` + optional `budget`
export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget?: string;
  message: string;
}

interface ReferralFormData {
  yourName: string;
  yourEmail: string;
  yourPhone: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientCompany?: string;
  projectDetails: string;
  estimatedBudget: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const sendContactForm = async (
    formData: ContactFormData,
  ): Promise<ApiResponse> => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await axiosInstance.post<ApiResponse>(
        "/contact-form",
        formData,
      );
      setResponse(res.data);
      return res.data;
    } catch (err: unknown) {
      const message =
        (
          err as {
            response?: { data?: { message?: string } };
          }
        )?.response?.data?.message ?? "Something went wrong. Please try again.";

      setError(message);
      // Return failure shape — callers use if/else, no try/catch needed
      return { success: false, message };
    } finally {
      setLoading(false);
    }
  };

  return { sendContactForm, loading, response, error };
};

export const useReferForm = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const sendReferForm = async (
    formData: ReferralFormData,
  ): Promise<ApiResponse> => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await axiosInstance.post<ApiResponse>(
        "/refer-form",
        formData,
      );
      setResponse(res.data);
      return res.data;
    } catch (err: unknown) {
      const message =
        (
          err as {
            response?: { data?: { message?: string } };
          }
        )?.response?.data?.message ?? "Something went wrong. Please try again.";

      setError(message);
      return { success: false, message };
    } finally {
      setLoading(false);
    }
  };

  return { sendReferForm, loading, response, error };
};
