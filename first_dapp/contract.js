const CONTRACT = {
  address: "0xA446Ad799A2D44a8ab43F22E458C367b6f58920A",
  abi: [
    {
      inputs: [],
      name: "getMood",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getRecipe",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_mood",
          type: "string",
        },
      ],
      name: "setMood",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_recipe",
          type: "string",
        },
      ],
      name: "setRecipe",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
};

//test network provider?
const provider = new ethers.providers.Web3Provider(window.ethereum, "rinkeby");

//conneting user wallet and integrating the contract
provider.send("eth_requestAccounts", []).then(() => {
  provider.listAccounts().then((accounts) => {
    signer = provider.getSigner(accounts[0]);
    BvgHouseContract = new ethers.Contract(
      CONTRACT.address,
      CONTRACT.abi,
      signer
    );
  });
});

async function getRecipe() {
  const getRecipePromise = BvgHouseContract.getRecipe();
  const recipe = await getRecipePromise;
  const showRecipe = document.getElementById("recipe");
  showRecipe.value = recipe;
  console.log("recipe:", recipe);
}

async function setRecipe() {
  const base = document.getElementById("base").value;
  const flvr = document.getElementById("flavour").value;
  const recipe = `bs: ${base} -- flvr: ${flvr}`;
  const setRecipePromise = BvgHouseContract.setRecipe(recipe);
  await setRecipePromise;
}

async function setMood() {
  const mood = document.getElementById("user_feedback").value;
  const set_mood_promise = BvgHouseContract.setMood(mood);
  await set_mood_promise;
}
async function getMood() {
  const review = document.getElementById("submitted_feedback");
  const get_mood_promise = BvgHouseContract.getMood();
  const mood = await get_mood_promise;
  review.value = mood;
}
