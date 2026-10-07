/**
 * FormSubmit Integration for Selyron Inquiries
 * Target Inbox: mrlin728@gmail.com
 */

export interface FormSubmitPayload {
  source: string;
  workEmail: string;
  companyName?: string;
  role?: string;
  friction?: string;
  deploymentEnv?: string;
  volume?: string;
  notes?: string;
  [key: string]: any;
}

export async function submitInquiryToFormSubmit(payload: FormSubmitPayload): Promise<{ success: boolean; message?: string }> {
  try {
    const response = await fetch("https://formsubmit.co/ajax/mrlin728@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        _subject: `[Selyron Inquiry] ${payload.source} - ${payload.companyName || payload.workEmail}`,
        _template: "table",
        _captcha: "false",
        timestamp: new Date().toISOString(),
        ...payload,
      }),
    });

    if (response.ok) {
      return { success: true };
    }

    const resData = await response.json().catch(() => ({}));
    return { 
      success: false, 
      message: resData.message || `FormSubmit returned status ${response.status}` 
    };
  } catch (error) {
    console.error("FormSubmit inquiry submission error:", error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : "Network error" 
    };
  }
}
