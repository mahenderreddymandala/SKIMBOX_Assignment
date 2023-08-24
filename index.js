let pairList = [{
    id: 1,
    name: '1 Pair',
    price: 'DKK 195.00',
    savedPrice: '',
    mostPopular: '',
    discount: '50% OFF',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Colour', 'Red', 'Green', 'Black', 'Yellow'],
},
{
    id: 2,
    name: '2 Pair',
    price: 'DKK 345.00',
    savedPrice: 'DKK 195.00',
    mostPopular: 'Most Popular',
    discount: '40% OFF',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Colour', 'Red', 'Green', 'Black', 'Yellow'],
},
{
    id: 3,
    name: '3 Pair',
    price: 'DKK 528.00',
    savedPrice: '',
    mostPopular: '',
    discount: '60% OFF',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Colour', 'Red', 'Green', 'Black', 'Yellow'],
},
];

const PairContainerEl = document.getElementById("PairContainer");


const onRadioSelect = (id) => {
    pairList.map(eachPair => {
        const RadioInputEl = document.getElementById(`Radio${eachPair.id}`);
        const HiddenCardEl = document.getElementById(`HiddenCard${eachPair.id}`);
        const PairCardEl = document.getElementById(`PairCard${eachPair.id}`);
        if(eachPair.id === id){
            RadioInputEl.checked = true;
            HiddenCardEl.classList.remove("inactive-pair");
            PairCardEl.classList.add("active-pair");
            return eachPair;
        }
        RadioInputEl.checked = false;
        HiddenCardEl.classList.add("inactive-pair");
        PairCardEl.classList.remove("active-pair");
        return eachPair;
    })   
};


const renderSelectEl = (HashSizeColorCard, options) => {
    const SelectEl = document.createElement("select");
    SelectEl.classList.add(`select-card`);
    SelectEl.setAttribute("value", options[0]);

    options.map(eachOption => {
        const optionEl = document.createElement("option");
        optionEl.textContent = eachOption;
        optionEl.setAttribute("value", eachOption);
        SelectEl.appendChild(optionEl);
    });
    HashSizeColorCard.appendChild(SelectEl);
};

const renderHiddenView = (PairCard, pairDetails) => {
    const {
        id,
        sizes,
        colors,
        isActive,
    } = pairDetails;

    const HiddenCard = document.createElement("div");
    HiddenCard.id=`HiddenCard${id}`;
    HiddenCard.classList.add("hidden-card", "inactive-pair");

    const SizeColorTitlesCard = document.createElement("div");
    SizeColorTitlesCard.classList.add("size-color-titles-card");
    const SizeEl = document.createElement("p");
    SizeEl.classList.add("size-color-para");
    SizeEl.textContent = "Size";
    SizeColorTitlesCard.appendChild(SizeEl);
    const ColorEl = document.createElement("p");
    ColorEl.classList.add("size-color-para");
    ColorEl.textContent = "Colour";
    SizeColorTitlesCard.appendChild(ColorEl);
    HiddenCard.appendChild(SizeColorTitlesCard);

    const HashSizeColorCard1 = document.createElement("div");
    HashSizeColorCard1.classList.add("hash-size-color");

    const HashEl1 = document.createElement("p");
    HashEl1.classList.add("hash");
    HashEl1.textContent = "#1";
    HashSizeColorCard1.appendChild(HashEl1);
    renderSelectEl(HashSizeColorCard1, sizes);
    renderSelectEl(HashSizeColorCard1, colors);
    HiddenCard.appendChild(HashSizeColorCard1);

    const HashSizeColorCard2 = document.createElement("div");
    HashSizeColorCard2.classList.add("hash-size-color");
    const HashEl2 = document.createElement("p");
    HashEl2.classList.add("hash");
    HashEl2.textContent = "#2";
    HashSizeColorCard2.appendChild(HashEl2);
    renderSelectEl(HashSizeColorCard2, sizes);
    renderSelectEl(HashSizeColorCard2, colors);
    HiddenCard.appendChild(HashSizeColorCard2);

    PairCard.appendChild(HiddenCard);
};

const createAndRender = pairDetails => {
    const {
        id,
        name,
        price,
        savedPrice,
        mostPopular,
        discount,
    } = pairDetails;

    const PairCard = document.createElement("div");
    PairCard.id=`PairCard${id}`
    PairCard.classList.add("pair-card");

    const VisibleCard = document.createElement("div");
    VisibleCard.classList.add("visible-card");

    const InputNamePrice = document.createElement("div");
    InputNamePrice.classList.add("input-name-price");

    const RadioInput = document.createElement("input");
    RadioInput.setAttribute("name", "bundle");
    RadioInput.setAttribute("type", "radio");
    RadioInput.id= `Radio${id}`;
    RadioInput.setAttribute("value", id);
    RadioInput.classList.add("radio");
    InputNamePrice.appendChild(RadioInput);

    
    const TitlePriceCard = document.createElement("div");
    TitlePriceCard.classList.add("pair-title-price");
    const Title = document.createElement("p");
    Title.classList.add("pair-title");
    Title.textContent = name;
    TitlePriceCard.appendChild(Title);

    const Price = document.createElement("p");
    Price.classList.add("pair-price");
    Price.textContent = price;
    TitlePriceCard.appendChild(Price);
    InputNamePrice.appendChild(TitlePriceCard);

    const SavedPrice = document.createElement("p");
    SavedPrice.classList.add("pair-saved");
    SavedPrice.textContent = savedPrice;
    InputNamePrice.appendChild(SavedPrice);

    VisibleCard.appendChild(InputNamePrice);

    const MostPopularDiscountCard = document.createElement("div");
    MostPopularDiscountCard.classList.add("popular-dicount-card");
    const MostPopular = document.createElement("p");
    MostPopular.classList.add("most-popular");
    MostPopular.textContent = mostPopular;
    MostPopularDiscountCard.appendChild(MostPopular);

    const Discount = document.createElement("p");
    Discount.classList.add("discount-percentage");
    Discount.textContent = discount;
    MostPopularDiscountCard.appendChild(Discount);
    VisibleCard.appendChild(MostPopularDiscountCard);
    PairCard.appendChild(VisibleCard);

    HiddenCard = renderHiddenView(PairCard, pairDetails);

    PairContainerEl.appendChild(PairCard);

    VisibleCard.onclick = function(){
        onRadioSelect(id)
    }
};


for (let eachPair of pairList) {
    createAndRender(eachPair);
}
