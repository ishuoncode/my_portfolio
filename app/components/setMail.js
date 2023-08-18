export const handleMailClick = () => {
    const email = 'ishusingh8127@gmail.com';
    const subject = 'Hello from your app';
    const body = 'This is the body of the email.';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };