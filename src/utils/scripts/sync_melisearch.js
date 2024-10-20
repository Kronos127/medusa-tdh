const { Medusa } = require("@medusajs/medusa");
const { MeiliSearch } = require("meilisearch");

(async () => {
  const meiliSearchClient = new MeiliSearch({ host: process?.env?.MEILISEARCH_HOST || "http://localhost:7700" });
  const medusaInstance = await Medusa({ directory: __dirname });

  // Assuming you have products in your Medusa instance
  const products = await medusaInstance.services.productService.list();

  // Index products into MeiliSearch
  await meiliSearchClient.index("products").addDocuments(products);

  console.log("Products indexed in MeiliSearch");
})();
