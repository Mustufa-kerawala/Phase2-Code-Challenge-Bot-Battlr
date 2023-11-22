import React from 'react';

const BotCollection = (botData) => {
    

    
    
    
    
    return (
        <div>
            <h1>Bot Collection</h1>
            {
                botData.botData.map(bot => {
                    return (
                        <div className='bot Card'>
                            <h3>{bot.name}</h3>
                            <img src={bot.avatar_url} alt={bot.name} />
                            <small></small>
                            <p>
                                <strong>Name: {bot.name} </strong>
                                <br />
                                <strong>Defense: </strong>{bot.defense}
                                <br />
                                <strong>Bot Class: {bot.bot_class} </strong>
                                <br />
                                <strong>Bot Catchphrase: {bot.catchphrase} </strong>

                            </p>
                            <button >Hire me!</button>
                            <button >Fire me!</button>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}


export default BotCollection;