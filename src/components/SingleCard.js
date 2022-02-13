import './SingleCard.css'

 /**
  * Créer l'état de la carte (tournée ou non)
  * @param {*} param0 
  * @returns 
  */
export default function SingleCard({card, handleChoice, flipped, disabled}) {
  const handleClick = () => {
    if (!disabled){
      handleChoice(card)
   }
  }

   /**
    * Créer le template de la carte 
    */
    return (
        <div className='card'>
            <div className={flipped ? "flipped" : ""}>
              <img className='front' src={card.src} alt='front' />
              <img className='back' src="/img/cover.png" alt='back' onClick={handleClick} />
            </div>
      </div>
    )
}