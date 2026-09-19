const textInput = document.getElementById("textInput");

const wordCount = document.getElementById("wordCount");
const characterCount = document.getElementById("characterCount");
const characterNoSpaces = document.getElementById("characterNoSpaces");
const sentenceCount = document.getElementById("sentenceCount");
const paragraphCount = document.getElementById("paragraphCount");
const lineCount = document.getElementById("lineCount");

const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");

function countText() {
  const text = textInput.value;

  characterCount.textContent = text.length;

  characterNoSpaces.textContent =
    text.replace(/\s/g, "").length;

  const words = text.trim()
    ? text.trim().split(/\s+/)
    : [];

  wordCount.textContent = words.length;

  const sentences = text
    .trim()
    .split(/[.!?]+/)
    .filter(x => x.trim().length > 0);

  sentenceCount.textContent =
    text.trim() ? sentences.length : 0;

  const paragraphs = text
    .trim()
    .split(/\n\s*\n/)
    .filter(x => x.trim().length > 0);

  paragraphCount.textContent =
    text.trim() ? paragraphs.length : 0;

  const lines = text
    .split("\n")
    .filter(x => x.trim().length > 0);

  lineCount.textContent =
    text.trim() ? lines.length : 0;
}

textInput.addEventListener("input", countText);

clearBtn.addEventListener("click", () => {
  textInput.value = "";
  countText();
  textInput.focus();
});

copyBtn.addEventListener("click", async () => {

  if (!textInput.value) {
    alert("There is no text to copy.");
    return;
  }

  try {
    await navigator.clipboard.writeText(textInput.value);

    copyBtn.textContent = "Copied!";

    setTimeout(() => {
      copyBtn.textContent = "Copy Text";
    }, 1500);

  } catch (error) {
    alert("Unable to copy text.");
  }
});

countText();
