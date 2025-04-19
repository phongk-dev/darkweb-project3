document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            showCustomPopup();
        });
    });

    function showCustomPopup() {
        let popup = document.createElement("div");
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.background = "#0a0a0a";
        popup.style.border = "3px solid #0ddb0d";
        popup.style.padding = "20px";
        popup.style.color = "#0ddb0d";
        popup.style.textAlign = "center";
        popup.style.fontFamily = "'Orbitron', sans-serif";
        popup.style.zIndex = "1000";
        popup.style.borderRadius = "8px";
        popup.style.width = "300px";

        popup.innerHTML = `
            <p style="font-size: 20px; margin-bottom: 20px;">Are you sure?</p>
            <button id="yesBtn" class="popup-btn">Yes</button>
            <button id="noBtn" class="popup-btn">No</button>
        `;

        let style = document.createElement("style");
        style.innerHTML = `
            .popup-btn {
                background: none;
                border: 2px solid #0ddb0d;
                color: #0ddb0d;
                padding: 8px 16px;
                cursor: pointer;
                font-size: 16px;
                margin: 5px;
                font-family: 'Orbitron', sans-serif;
            }
            .popup-btn:hover {
                background: #0ddb0d;
                color: #222;
            }
        `;

        document.body.appendChild(style);
        document.body.appendChild(popup);

        document.getElementById("yesBtn").addEventListener("click", function () {
            showFlyingText("");
            popup.remove();
        });

        document.getElementById("noBtn").addEventListener("click", function () {
            popup.remove();
        });
    }

});
