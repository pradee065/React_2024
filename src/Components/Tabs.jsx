export default function Tabs({children, button, buttonContainer}){
    const ButtonContainer = buttonContainer;
    return(
        <>
         <ButtonContainer>
            {button}
         </ButtonContainer>
        {children}
        </>
       
    )
}