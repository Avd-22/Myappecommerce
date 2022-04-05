// import { Add, Remove } from "@material-ui/icons";
// import { withThemeCreator } from "@material-ui/styles";
import styledComponents from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/navbar"
import { Link } from "react-router-dom";
// import popularProduct from "./Prouctsdata";
// import { popularProducts } from "./data";

const Container = styledComponents.div``;

const Wrapper = styledComponents.div`
  padding: 20px;
`;

const Title = styledComponents.h1`
  font-weight: 300;
  text-align: center;
  text-decoration: underline;
`;

const Top = styledComponents.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styledComponents.div`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  border-radius: 5px;
  background-color: ${(props) => props.type === "filled" ? "black" : "orange"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styledComponents.div``

const TopText = styledComponents.span`
  cursor: pointer;
  margin: 0px 10px;
`;

// const Bottom = styledComponents.div``;

// const Bottom = styledComponents.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const Info = styledComponents.div`
//   flex: 3;
// `;

// const Product = styledComponents.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const ProductDetail = styledComponents.div`
//   flex: 2;
//   display: flex;
// `;

// const Image = styledComponents.img`
//   width: 200px;
// `;

// const Details = styledComponents.div`
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
// `;

// const ProductName = styledComponents.span``;

// const ProductId = styledComponents.span``;

// const ProductColor = styledComponents.div`
//   width: 12px;
//   height: 12px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
// `;

// const ProductSize = styledComponents.span``;

// const PriceDetail = styledComponents.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const ProductAmountContainer = styledComponents.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const ProductAmount = styledComponents.div`
//   font-size: 24px;
//   margin: 5px;
// `;

// const ProductPrice = styledComponents.div`
//   font-size: 30px;
//   font-weight: 200;
// `;

// const Hr =styledComponents.hr`
//   background-color: #eee;
//   border: none;
//   height: 1px;
// `;

// const Summary = styledComponents.div`
//   flex: 1;
//   border: 0.5px solid lightgray;
//   border-radius: 10px;
//   padding: 20px;
//   height: 50vh;
// `;

// const SummaryTitle = styledComponents.h1`
//   font-weight: 200;
// `;

// const SummaryItem = styledComponents.div`
//   margin: 30px 0px;
//   display: flex;
//   justify-content: space-between;
//   font-weight: ${(props) => props.type === "total" && "500"};
//   font-size: ${(props) => props.type === "total" && "14px"};
// `;

// const SummaryItemText = styledComponents.span``;

// const SummaryItemPrice = styledComponents.span``;

// const Button = styledComponents.button`
//   width: 100%;
//   padding: 10px;
//   background-color: lightblue;
//   color: black;
//   font-weight: 600;
//   font-size: 14px;
// `;


// const Cart = () => {
//   return (
//     <Container>
//     <Announcement />
//     <Navbar />
//     <Wrapper>
//     </Wrapper>
//     <Title><b>YOUR CART</b></Title>
//     <Top>
//     <TopButton>CONTINUE SHOPPING</TopButton>
//     <TopTexts>
//     <TopText>Shopping Bag(2)</TopText>
//     <TopText>Your Wishlist(0)</TopText>
//     </TopTexts>
//     <TopButton type="filled">CHECKOUT NOW</TopButton>
//     </Top>
//     <Bottom>
//     <Info>
//     <Product>
//     <ProductDetail>
//     <Image src = "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
//     <Details>
//     <ProductName><b>Product: </b>ADDIDAS SHOES</ProductName>
//     <ProductId><b>Id: </b>45689125</ProductId>
//     <ProductColor color = "black" />
//     <ProductSize><b>Size: </b>37.5</ProductSize>
//     </Details>
//     </ProductDetail>
//     <PriceDetail>
//     <ProductAmountContainer>
//     <Add />
//     <ProductAmount>2</ProductAmount>
//     <Remove />
//     </ProductAmountContainer>
//     <ProductPrice>35 $</ProductPrice>
//     </PriceDetail>
//     </Product>

//     <Hr />

//     <Product>
//     <ProductDetail>
//     <Image src = "https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
//     <Details>
//     <ProductName><b>Product: </b>T-SHIRT</ProductName>
//     <ProductId><b>Id: </b>14582356</ProductId>
//     <ProductColor color = "gray" />
//     <ProductSize><b>Size: </b>M</ProductSize>
//     </Details>
//     </ProductDetail>
//     <PriceDetail>
//     <ProductAmountContainer>
//     <Add />
//     <ProductAmount>2</ProductAmount>
//     <Remove />
//     </ProductAmountContainer>
//     <ProductPrice>15 $</ProductPrice>
//     </PriceDetail>
//     </Product>
//     </Info>

//     <Summary>
//     <SummaryTitle><b>ORDER SUMMARY</b></SummaryTitle>
//             <SummaryItem>
//               <SummaryItemText>Subtotal :</SummaryItemText>
//               <SummaryItemPrice>50 $</SummaryItemPrice>
//             </SummaryItem>
//             <SummaryItem>
//               <SummaryItemText>Estimated Shipping :</SummaryItemText>
//               <SummaryItemPrice>5.90 $</SummaryItemPrice>
//             </SummaryItem>
//             <SummaryItem>
//               <SummaryItemText>Shipping Discount :</SummaryItemText>
//               <SummaryItemPrice>-5.90 $</SummaryItemPrice>
//             </SummaryItem>
//             <SummaryItem type="total">
//               <SummaryItemText>Total :</SummaryItemText>
//               <SummaryItemPrice>50 $</SummaryItemPrice>
//             </SummaryItem>
//             <Button>BUY NOW</Button>
//     </Summary>
//     </Bottom>
//     </Container>
//   )
// }

// export default Cart */

// import React from 'react'

const Cartitemsempty = styledComponents.div``;

const Cartitemslist = styledComponents.div``;

const Cartitemsimage = styledComponents.div``;

const Image = styledComponents.img``;

const CartitemsFunction = styledComponents.div``;

const CartitemsAdd = styledComponents.div``;

const CartitemsRemove =styledComponents.div``;

// const ProductButton = styledComponents.button``;

const Cart = ({ cartItems = []  , handleAddProduct} ) => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
      </Wrapper>
      <Title><b>YOUR CART</b></Title>
      <Top>
        <TopButton><Link to={"/"} style={{color: "black" , textDecoration: "none"}}>CONTINUE SHOPPING</Link></TopButton>
        <TopTexts>
          <TopText>Shopping Bag(0)</TopText>
          <TopText>Your Wishlist(0)</TopText>
        </TopTexts>
        <TopButton type="filled" onClick={() => alert("Thank You For Shopping")}>CHECKOUT NOW</TopButton>
      </Top>
      {cartItems.length === 0 && (
        <Cartitemsempty>No Items are Added</Cartitemsempty>
      )}
      <div>
      {cartItems.map((item) => (
        <Cartitemslist item={item} key={item.id}>
          <Cartitemsimage>
            <Image src={item.img} />
          </Cartitemsimage>
          <CartitemsFunction>
            <CartitemsAdd onClick={() => handleAddProduct(item)}>+</CartitemsAdd>
            <CartitemsRemove>-</CartitemsRemove>
          </CartitemsFunction>
        </Cartitemslist>
      ))}
      </div>

    </Container>
  )
}

export default Cart
