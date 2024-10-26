<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture form data
    $firstName = htmlspecialchars($_POST['FirstName']);
    $lastName = htmlspecialchars($_POST['LastName']);
    $email = htmlspecialchars($_POST['Email']);
    $phone = htmlspecialchars($_POST['PhoneNumber']);
    $message = htmlspecialchars($_POST['Message']);

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Save the form data into a database or send as email
    // Example: Sending an email

    $to = "your_email@example.com";  // Replace with your email
    $subject = "New Contact Form Submission";
    $body = "Name: $firstName $lastName\nEmail: $email\nPhone: $phone\nMessage: $message";

    // Sending email
    if (mail($to, $subject, $body)) {
        echo "Thank you for contacting us! We'll get back to you soon.";
    } else {
        echo "Sorry, there was an issue submitting your form. Please try again later.";
    }
} else {
    echo "Form submission error.";
}
?>
