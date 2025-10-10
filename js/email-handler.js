// email-handler.js
// Handles contact form submission with EmailJS and shows feedback in the submit button only.

// 1) Initialize EmailJS (make sure the EmailJS SDK script is loaded in your HTML before this file)
(function () {
  if (!window.emailjs) {
    console.error('EmailJS SDK not found. Include it before this file: https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js');
    return;
  }
  // Replace with your actual Public Key
  emailjs.init("YGP_TA2piVldWJEtd");
})();

// 2) Configuration
const EMAIL_CONFIG = {
  serviceID: 'service_tyewaog',             // e.g., 'service_xxxxxxx'
  adminTemplateID: 'template_54po3eq',// e.g., 'template_admin123'
  userTemplateID: 'template_3wysbvw',  // e.g., 'template_user123'
  adminEmail: 'rahul@1stprincipleslab.com'   // where admin notifications go
};

// 3) Helper to control the submit button state
function setSubmitButtonState(btn, state) {
  if (!btn) return;

  const original = btn.dataset.originalHtml || btn.innerHTML;

  switch (state) {
    case 'loading': {
      btn.dataset.originalHtml = original; // remember original label
      btn.disabled = true;
      btn.setAttribute('aria-busy', 'true');
      btn.innerHTML = '<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Sending...';
      break;
    }
    case 'success': {
      btn.setAttribute('aria-busy', 'false');
      btn.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i> Message sent!';
      break;
    }
    case 'error': {
      btn.setAttribute('aria-busy', 'false');
      btn.innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Failed. Try again';
      break;
    }
    case 'reset': {
      btn.disabled = false;
      btn.removeAttribute('aria-busy');
      btn.innerHTML = btn.dataset.originalHtml || 'Send Message';
      delete btn.dataset.originalHtml;
      break;
    }
  }
}

// 4) Collect form data safely
function collectFormData(form) {
  const nameInput = form.querySelector('input[name="name"]');
  const emailInput = form.querySelector('input[name="email"]');
  const phoneInput = form.querySelector('input[name="phone"]');
  const serviceSelect = form.querySelector('select[name="service"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  const serviceText = serviceSelect && serviceSelect.selectedIndex >= 0
    ? serviceSelect.options[serviceSelect.selectedIndex].text
    : '';

  return {
    from_name: nameInput ? nameInput.value.trim() : '',
    from_email: emailInput ? emailInput.value.trim() : '',
    from_phone: phoneInput && phoneInput.value.trim() ? phoneInput.value.trim() : 'Not provided',
    service_type: serviceText,
    message: messageInput ? messageInput.value.trim() : '',
    to_email: EMAIL_CONFIG.adminEmail // used by admin template "To" if set to {{to_email}}
  };
}

// 5) Send both emails (admin + user)
function sendEmails(formData) {
  const adminEmailPromise = emailjs.send(
    EMAIL_CONFIG.serviceID,
    EMAIL_CONFIG.adminTemplateID,
    formData
  );

  const userEmailPromise = emailjs.send(
    EMAIL_CONFIG.serviceID,
    EMAIL_CONFIG.userTemplateID,
    formData
  );

  return Promise.all([adminEmailPromise, userEmailPromise]);
}

// 6) Attach submit handler
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) {
    console.warn('contact-form not found on page.');
    return;
  }

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const submitBtn = this.querySelector('button[type="submit"]');
    setSubmitButtonState(submitBtn, 'loading');

    const formData = collectFormData(this);

    sendEmails(formData)
      .then(() => {
        // Optional: clear the form
        this.reset();

        // Show success on the button, then reset back to original
        setSubmitButtonState(submitBtn, 'success');
        setTimeout(() => setSubmitButtonState(submitBtn, 'reset'), 1800);
      })
      .catch((error) => {
        console.error('EmailJS send failed:', error);

        // Show error on the button, then reset back to original
        setSubmitButtonState(submitBtn, 'error');
        setTimeout(() => setSubmitButtonState(submitBtn, 'reset'), 2200);
      });
  });
});
