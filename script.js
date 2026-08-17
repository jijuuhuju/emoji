const input = document.getElementById("input");
const output = document.getElementById("output");

function convertEmoji(text) {
  return text.replace(/;question;/g, () => {
    return `<img class="emoji" src="emojis/question.svg" alt="question">`;
  });
}

input.addEventListener("input", () => {
  output.innerHTML = convertEmoji(input.value);
});
