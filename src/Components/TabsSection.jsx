export default function TabsSection({children, onSelect, isSelected}){
    console.log('Tabcontent content goes here');
    return(
        <li><button className={isSelected ? 'active' : undefined}  onClick={onSelect}>{children}</button></li>
    )
}