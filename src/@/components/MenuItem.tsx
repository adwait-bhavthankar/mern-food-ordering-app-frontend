import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import type {MenuItem} from "../../types";

type Props = {
    menuItem: MenuItem;
    addToCart: () => void; 
    
  };
  
  const MenuItem = ({ menuItem, addToCart }: Props) => {
    return (
      <Card className="cursor-pointer" onClick={addToCart}>
        <CardHeader>
          <CardTitle>{menuItem.name}</CardTitle>
        </CardHeader>
        <CardContent className="font-bold">
        ₹{(menuItem.price / 1).toFixed(2)}
        </CardContent>
      </Card>
    );
  };
  
  export default MenuItem;