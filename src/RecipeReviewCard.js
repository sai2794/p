import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import "./RecipeReviewCard.css";
export default function MediaCard() {
  return (
    
    <>
    
    <div className="image">
  <img src="https://img.freepik.com/free-vector/restaurant-logo-template_1236-155.jpg?w=740&t=st=1699708377~exp=1699708977~hmac=1ada9986a22e6d83fa2d555313e5450ea774bb5c2a21518d7c20ad290124f188" alt="Description of the image" width="600px" height="500px"/>
</div>

<div className="back">
    <div className="Sideline">
        <p>"Embark on a culinary journey with our chef's masterpiece, a symphony of flavors crafted into each bite, revealing the artistry behind our signature dish.
        Elevate your dining experience with our exclusive creations – where tradition meets avant-garde, and each dish tells a story of passion, precision, and the pursuit of extraordinary taste."</p>
      </div>
    <Grid container spacing={1}>
      
    <Grid item xs={4}>
    <div className="Card">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Savory Harmony Medley
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Vegetable rice with meat combines fluffy rice, colorful vegetables, and tender meat, creating a wholesome and flavorful one-pot dish that satisfies both the palate and appetite. The savory union of vegetables and meat, infused with aromatic spices, delivers a deliciously balanced meal.
        </Typography>
      </CardContent>
      <CardActions>
        <p size="small">Cost</p>
        <p size="small">Rs.250</p>
      </CardActions>
    </Card>
    </div>
    </Grid>
   
   
    <Grid item xs={4}>
    <div className="Card">
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        PanCakes
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Fluffy stacks of golden-brown pancakes, drizzled with maple syrup and topped with a dollop of melting butter, creating a delightful symphony of sweet and savory flavors that dance on your taste buds. These classic breakfast delights offer a comforting embrace with each forkful, making mornings a delicious celebration.
      </Typography>
    </CardContent>
    <CardActions>
    <p size="small">Cost</p>
        <p size="small">Rs.350</p>
    </CardActions>
  </Card>
  </div>
  </Grid>
  
  
  <Grid item xs={4}>
  <div className="Card">
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image="https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Ramen
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Steaming bowls of Japanese ramen showcase springy noodles immersed in a savory broth, adorned with succulent slices of pork, crisp vegetables, and aromatic green onions, creating a harmonious blend of flavors and textures. This iconic comfort food is a culinary journey through the heart of Japanese cuisine.
      </Typography>
    </CardContent>
    <CardActions>
    <p size="small">Cost</p>
        <p size="small">Rs.290</p>
    </CardActions>
  </Card>
  </div>
  </Grid>
  <Grid item xs={4}>
    <div className="Card">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&usqp=CAU"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pasta
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Penne pasta, with its tubular shape and ridges, serves as a perfect canvas for capturing rich sauces, effortlessly holding onto flavors. Al dente perfection and versatile pairing make penne a beloved choice, bringing Italian culinary delight to every bite.
        </Typography>
      </CardContent>
      <CardActions>
      <p size="small">Cost</p>
        <p size="small">Rs.300</p>
      </CardActions>
    </Card>
    </div>
    </Grid>
    <Grid item xs={4}>
    <div className="Card">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Salad
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A vibrant and refreshing salad, harmonizing the sweetness of grapes and mangoes with the juiciness of strawberries, complemented by the crunch of almonds and briny olives. The medley, lightly dressed in yogurt, creates a delightful symphony of textures and flavors, offering a burst of freshness in every mouthful.
        </Typography>
      </CardContent>
      <CardActions>
      <p size="small">Cost</p>
        <p size="small">Rs.250</p>
      </CardActions>
    </Card>
    </div>
    </Grid>
    <Grid item xs={4}>
    <div className="Card">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035-1024x683.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chicken Biryani
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Chicken biryani, a regal South Asian dish, layers succulent marinated chicken with fragrant basmati rice, melding spices and herbs into a symphony of aromatic perfection. This culinary masterpiece, garnished with caramelized onions and fresh cilantro, is a celebration of rich flavors and tender textures.
        </Typography>
      </CardContent>
      <CardActions>
        <p size="small">Cost</p>
        <p size="small">Rs.380</p>
      </CardActions>
    </Card>
    </div>
    </Grid>
  </Grid>
  </div>
  </>

  );
}

