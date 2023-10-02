const result = document.querySelector(".result");

const fetchData = async () => {
  const { data } = await axios.get("/api/1-hello");
  console.log(data);
  result.innerHTML = data;
};

fetchData();
