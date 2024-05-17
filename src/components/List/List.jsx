import { ListItem } from "../ListItem/ListItem";

export function List({ items }) {
  return (
    <div style={{ overflowY: "scroll", height: "40%" }}>
      <table className="table table-hover table-borderless">
        <tbody>
          {
            items.map((item, i)=>{
              return <ListItem item={item} key={item.name+i}/>
            })
          }
          {/* <ListItem />
          <ListItem />
          <ListItem />
          <ListItem /> */}
        </tbody>
      </table>
    </div>
  );
}
