// 群組展開 / 收合功能
document.querySelectorAll('.group-btn').forEach(button => {
    button.addEventListener('click', function() {
        let content = this.nextElementSibling;
        content.style.display = (content.style.display === "block") ? "none" : "block";
    });
});

// 點選選項，填入文字框
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("option-btn")) {
        document.getElementById("textArea").value = event.target.getAttribute("data-content");
    }

    // 刪除選項
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
    }
});

// 複製文字
function copyText() {
    let textArea = document.getElementById("textArea");
    textArea.select();
    document.execCommand("copy");
    alert("✅ 已複製！");
}

// 清除文字
function clearText() {
    document.getElementById("textArea").value = "";
}

// 新增自定義選項（確保格式跟「基本設定範例」一致）
document.getElementById("addCustom").addEventListener("click", function() {
    let input = document.getElementById("customInput").value.trim();
    let group = document.getElementById("groupSelect").value;
    if (input === "") return;

    let newItem = document.createElement("div"); 
    newItem.classList.add("copy-text"); // ✅ 確保樣式一致
    newItem.textContent = input;

    // 刪除按鈕
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "清除";
    deleteBtn.addEventListener("click", function () {
        newItem.remove();
    });

    newItem.appendChild(deleteBtn);
    document.getElementById(group).appendChild(newItem);

    document.getElementById("customInput").value = "";
});
