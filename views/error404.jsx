const React = require('react')
const Def = require('../default')

function error404 (){
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we cant find this page!</p>
                <div>
                    <img src="/images/luis-villasmil-jPpHpgWNCKs-unsplash.jpg" alt="Error" />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                </div>
            </main>
            
        </Def>
    )
}

module.exports = error404