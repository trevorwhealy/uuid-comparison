const tenMillion = 10000000;

async function generateIds() {
  const { crypto } = await import("crypto");

  for (let i = 0; i < tenMillion; i++) {
    crypto();
  }
}

generateIds().catch((err) => {
  console.error("Error generating IDs:", err);
});
