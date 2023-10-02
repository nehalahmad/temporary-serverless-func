const result = document.querySelector(".result");

const fetchData = async () => {
  const { data } = await axios.get("/api/2-basic-api/");
  const products = data
    .map(({ name, price, image: { url } }) => {
      return `<article class="product">
      <img
        src="${url}"
        alt="${name}"
      />
      <div class="info">
        <h5>${name}</h5>
        <h5 class="price">$${price}</h5>
      </div>
    </article>`;
    })
    .join("");

  result.innerHTML = products;
};

fetchData();
