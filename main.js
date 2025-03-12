
        // STATION PAIRS
        const prices = {
            "manila-cebu": 1500,
            "manila-davao": 1200,
            "manila-tagaytay": 800,
            "manila-baguio": 1000,
            "cebu-davao": 900,
            "cebu-tagaytay": 1100,
            "cebu-baguio": 1200,
            "davao-tagaytay": 1500,
            "davao-baguio": 1600,
            "tagaytay-baguio": 700
        };

        function showTicketPrice() {
            var fromStation = document.getElementById("from-station").value;
            var toStation = document.getElementById("to-station").value;
            var discount = document.getElementById("discount").value;

            if (fromStation === toStation) {
                alert("You can't travel from and to the same station.");
                return;
            }

            var priceKey = fromStation + "-" + toStation;
            var price = prices[priceKey] || 1000;

            // Apply discount
            if (discount === "senior") {
                price *= 0.7; // 30% discount
            } else if (discount === "student") {
                price *= 0.8; // 20% discount
            } else if (discount === "PWD") {
                price *= 0.5; // 50% discount
            }

            
            document.getElementById("ticket-price-display").innerText = "₱" + price.toFixed(2);
            document.getElementById("discount-display").innerText = discount.charAt(0).toUpperCase() + discount.slice(1);
        }

        function generateTicket() {
            var fromStation = document.getElementById("from-station").value;
            var toStation = document.getElementById("to-station").value;

            if (fromStation === toStation) {
                alert("You can't travel from and to the same station.");
                return;
            } 
        }

        function makeAnotherTicket() {
            // Reset the form fields for another ticket generation
            document.getElementById("from-station").value = "manila";
            document.getElementById("to-station").value = "manila";
            document.getElementById("discount").value = "none";
            document.getElementById("ticket-price-display").innerText = "-";
            document.getElementById("discount-display").innerText = "-";
        }

        function searchFunction() {
            // Add search functionality here if needed
            alert('Search functionality not yet implemented!');
        }
