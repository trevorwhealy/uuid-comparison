const tenMillion = 10000000;

async function generateIds() {
  const { v4 } = await import("uuid");

  for (let i = 0; i < tenMillion; i++) {
    v4();
  }
}

generateIds().catch((err) => {
  console.error("Error generating IDs:", err);
});
