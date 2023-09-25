const tenMillion = 10000000;

async function generateIds() {
  const { nanoid } = await import("nanoid");

  for (let i = 0; i < tenMillion; i++) {
    nanoid();
  }
}

generateIds().catch((err) => {
  console.error("Error generating IDs:", err);
});
