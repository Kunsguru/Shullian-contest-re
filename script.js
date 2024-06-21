document.querySelector('.read-more-btn').addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            document.getElementById(targetId).classList.toggle('hidden');
        });

        function handleRegistrationClick() {
            const form = document.getElementById('registration-form');
            form.classList.toggle('hidden');

            const now = new Date();
            const formattedDate = now.toISOString().slice(0, 10).replace(/-/g, '') + '-' + now.toTimeString().slice(0, 2).replace(/:/g, '') + '-' + now.toTimeString().slice(3, 5).replace(/:/g, '');
            document.getElementById('matric-number').value = formattedDate;
        }

        function handleFormSubmit(event) {
            event.preventDefault();
            const form = document.getElementById('registration');
            const formData = new FormData(form);

            const paymentAmount = parseInt(formData.get('payment-type'), 10);
            const receiptFile = formData.get('receipt');
            const receiptSize = receiptFile.size;

            if (paymentAmount !== 50000 && paymentAmount !== 25000) {
                alert('Invalid payment amount.');
                return;
            }

            const emailBody = `
                Full Name: ${formData.get('full-name')}
                Matriculation Number: ${formData.get('matric-number')}
                Phone Number: ${formData.get('phone-number')}
                Address: ${formData.get('address')}
                Email: ${formData.get('email')}
                Payment Amount: ${paymentAmount}
                Date: ${new Date().toLocaleDateString()}
                Time: ${new Date().toLocaleTimeString()}
            `;

            const mailtoLink = `mailto:mondaykingsley80@gmail.com?subject=Registration&body=${encodeURIComponent(emailBody)}`;
            window.location.href = mailtoLink;

            alert('Registration submitted successfully.');
            document.getElementById('home-button').classList.remove('hidden');
        }

        function goBackHome() {
            window.location.href = 'index.html'; // Change 'index.html' to your home page URL if different
        }
