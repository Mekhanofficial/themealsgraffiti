// menuData.js
import plainfried from "../../pictures/plainfried.jpg";
import pineshrimprice from "../../pictures/pineshrimprice.jpg";
import jollof from "../../pictures/jollof.jpg";
import shrimpfriedrice from "../../pictures/shrimpfriedrice.jpg";
import coconutrice from "../../pictures/coconutrice.jpeg";
import chineserice from "../../pictures/chineserice.jpg";
import riceandstew from "../../pictures/riceandstew.jpg";
import grilledchicken from "../../pictures/grilledchic.jpg";
import grilledchicmed from "../../pictures/grilledchicmed.avif";
import pepperedchic from "../../pictures/pepperedchic.jpg";
import stewedbeef from "../../pictures/stewedbeef.jpg";
import crispychic from "../../pictures/crispychic.jpg";
import pepperedbeef from "../../pictures/pepperedbeef.jpg";
import croaker from "../../pictures/croaker.jpg";
import hakefish from "../../pictures/hakefish.jpg";
import stewedtitus from "../../pictures/stewedtitus.jpg";
import coleslaw from "../../pictures/coleslaw.jpg";
import dodo from "../../pictures/dodo.jpg";
import moi from "../../pictures/moi.jpg";
import pepperedsnail from "../../pictures/pepperedsnail.jpg";
import bananabread from "../../pictures/bananabread.jpg";
import bananabmed from "../../pictures/bananabmed.jpg";
import meatpie from "../../pictures/meatpie.jpg";
import chickenpie from "../../pictures/chickenpie.jpg";
import jamdou from "../../pictures/jamdou.jpg";
import sausage from "../../pictures/sausage.jpg";
import chickensandwich from "../../pictures/chickensandwich.jpg";
import longbun from "../../pictures/longbun.jpg";
import burgers from "../../pictures/burgers.jpg";
import chocolatevan from "../../pictures/chocolatevan.jpg";

export const menuItems = {
  all: [
    { name: "White Rice & Stew", price: "#1000", description: "Steamed white rice served with spicy tomato stew", image: riceandstew },
    { name: "Grilled Chicken", price: "#4000", description: "Juicy grilled chicken", image: grilledchicken },
    { name: "Special Shrimps FriedRice", price: "#2000", description: "Deluxe fried rice with jumbo shrimp", image: shrimpfriedrice },
    { name: "Grilled Chicken Medium", price: "#3500", description: "Medium-sized grilled chicken", image: grilledchicmed },
    { name: "Peppered Chicken", price: "#4000", description: "Spicy peppered chicken", image: pepperedchic },
    { name: "Chinese Rice", price: "#1500", description: "Authentic Chinese-style fried rice", image: chineserice },
    { name: "Crispy Chicken", price: "#3000", description: "Crunchy fried crispy chicken", image: crispychic },
    { name: "Plantain", price: "#1000", description: "Fried sweet plantains", image: dodo },
    { name: "Stewed Beef", price: "#1500", description: "Beef cooked in rich tomato sauce", image: stewedbeef },
    { name: "Moi Moi", price: "#1000", description: "Steamed bean pudding", image: moi },
    { name: "Banana Bread", price: "#2500", description: "Moist homemade banana bread", image: bananabread },
    { name: "Banana Bread Medium", price: "#2000", description: "Medium-sized banana bread", image: bananabmed },
    { name: "Meat Pie", price: "#1000", description: "Flaky pastry stuffed with minced meat", image: meatpie },
    { name: "Chicken Pie", price: "#1200", description: "Pastry filled with seasoned chicken", image: chickenpie },
    { name: "Jam Doughnuts", price: "#700", description: "Soft doughnuts filled with jam", image: jamdou },
    { name: "Sausage", price: "#1000", description: "Savory sausage snack", image: sausage },
    { name: "Chicken Sandwich", price: "#2000", description: "Grilled chicken sandwich with lettuce and mayo", image: chickensandwich },
    { name: "Burgers", price: "#5000", description: "Juicy beef or chicken burger", image: burgers },
    { name: "Long Bun Chicken Sandwich", price: "#3000", description: "Long bun sandwich with crispy chicken", image: longbun },
    { name: "Peppered Beef", price: "#1500", description: "Spicy beef chunks", image: pepperedbeef },
    { name: "Peppered Snail", price: "#5000", description: "Delicacy of spicy cooked snails", image: pepperedsnail },
    { name: "Peppered Fried Croaker Fish", price: "#4000", description: "Spicy deep-fried croaker fish", image: croaker },
    { name: "Peppered Fried Hake Fish", price: "#4000", description: "Crispy fried hake fish with pepper sauce", image: hakefish },
    { name: "Party Jollof Rice", price: "#1000", description: "Classic Nigerian party jollof rice", image: jollof },
    { name: "Pineapple Shrimps Fried Rice", price: "#2500", description: "Fried rice with shrimp and pineapple", image: pineshrimprice },
    { name: "Plain Fried Rice", price: "#1000", description: "Simple fried rice with vegetables", image: plainfried },
    { name: "Asun Coconut Rice", price: "#1700", description: "Coconut rice with spicy goat meat (asun)", image: coconutrice },
    { name: "Stewed Titus", price: "#3000", description: "Titus fish cooked in tomato stew", image: stewedtitus },
    { name: "Coleslaw", price: "#1000", description: "Creamy coleslaw salad", image: coleslaw },
    { name: "Chocolate & Vanilla Cookies", price: "#500", description: "Freshly baked chocolate and vanilla cookies", image: chocolatevan },
  ],
  breakfast: [
    { name: "Banana Bread", price: "#2500", description: "Freshly baked banana bread, soft and delicious", image: bananabread },
    { name: "Banana Bread Medium", price: "#2000", description: "Medium-sized banana bread, perfect for sharing", image: bananabmed },
    { name: "Jam Doughnuts", price: "#700", description: "Soft, fluffy doughnuts filled with sweet fruit jam", image: jamdou },
    { name: "Chocolate x Vanilla Cookies", price: "#500", description: "Decadent mix of chocolate and vanilla cookies", image: chocolatevan },
    { name: "Chicken Sandwich", price: "#2000", description: "Crispy chicken fillet with lettuce, tomato, and mayo", image: chickensandwich },
    { name: "Long Bun Chicken Sandwich", price: "#3000", description: "Juicy chicken fillet in a long bun with toppings", image: longbun },
    { name: "Party Jollof Rice", price: "#1000", description: "Flavorful Jollof rice, perfect for sharing", image: jollof },
    { name: "Plain Fried Rice", price: "#1000", description: "Simple fried rice with fresh vegetables", image: plainfried },
    { name: "Plantain", price: "#1000", description: "Golden fried plantain slices", image: dodo },
    { name: "Stewed Beef", price: "#1500", description: "Tender beef in rich tomato sauce", image: stewedbeef },
    { name: "Peppered Chicken", price: "#4000", description: "Spicy grilled chicken with herbs", image: pepperedchic },
    { name: "Peppered Beef", price: "#1500", description: "Tender beef in spicy pepper sauce", image: pepperedbeef },
    { name: "Burgers", price: "#5000", description: "Juicy beef burger with special sauce", image: burgers },
  ],
  brunch: [
    { name: "Meat Pie", price: "#1000", description: "Flaky pastry with seasoned meat and vegetables", image: meatpie },
    { name: "Chicken Pie", price: "#1200", description: "Pastry with tender chicken and creamy filling", image: chickenpie },
    { name: "Chicken Sandwich", price: "#2000", description: "Crispy chicken sandwich with fresh toppings", image: chickensandwich },
    { name: "Long Bun Chicken Sandwich", price: "#3000", description: "Chicken fillet in long bun with savory sauce", image: longbun },
  ],
  lunch: [
    { name: "Party Jollof Rice", price: "#1000", description: "Rich and flavorful Jollof rice", image: jollof },
    { name: "Pineapple Shrimps Fried Rice", price: "#2500", description: "Fried rice with shrimp and pineapple", image: pineshrimprice },
    { name: "Plain Fried Rice", price: "#1000", description: "Fried rice with fresh vegetables", image: plainfried },
    { name: "Special Shrimps FriedRice", price: "#2000", description: "Seasonal favorite with extra flavor", image: shrimpfriedrice },
    { name: "Asun Coconut Rice", price: "#1700", description: "Coconut rice with grilled beef", image: coconutrice },
    { name: "White Rice x Stew", price: "#1000", description: "White rice with rich, flavorful stew", image: riceandstew },
    { name: "Coleslaw", price: "#1000", description: "Creamy coleslaw salad", image: coleslaw },
    { name: "Chinese Rice", price: "#1500", description: "Fried rice with authentic Chinese spices", image: chineserice },
  ],
  dinner: [
    { name: "Stewed Beef", price: "#1500", description: "Tender beef in rich tomato sauce", image: stewedbeef },
    { name: "Grilled Chicken", price: "#4000", description: "Chicken seasoned with herbs and spices", image: grilledchicken },
    { name: "Crispy Chicken", price: "#3000", description: "Crispy fried chicken with dipping sauce", image: crispychic },
    { name: "Peppered Snail", price: "#5000", description: "Spicy cooked snails for seafood lovers", image: pepperedsnail },
    { name: "Peppered Fried Fish", price: "#4000", description: "Fried fish with spicy pepper sauce", image: croaker },
  ],
};