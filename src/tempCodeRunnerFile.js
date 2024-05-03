const options = {method: 'GET', headers: {'User-Agent': 'insomnia/8.6.1'}};

fetch('https://diamondsdirect.com/apis/ecommerce-service/public/v1/search?fieldsToQuery=images_ej%2Cprice_efi%2Cretail_price_ef%2Ccustom_url%2Cpage_slug_esi%2Ccalculated_price_efi%2Csale_price_efi%2Ccategory_tree_ej%2Cbrand_esi%2Cvariant_options_ej%2Cvariants_ej%2Ccustom_fields_ej%2Csku_for_analytics_esli%2C&skip=0&limit=30&isAuto=false&order_by=asc&sort_by=cust_carat_efai', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));