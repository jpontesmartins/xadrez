import React, { Component } from 'react';
import './styles.css';
import Torre from '../Torre';
import Cavalo from '../Cavalo';
import Bispo from '../Bispo';
import Rainha from '../Rainha';
import Rei from '../Rei';


class App extends Component {
  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    return (
      <div> xadrez da ovelha estoica :)
        <div className="container">


          {/* coluna A */}
          <div>
            A
            <Torre />
            <div>7</div>
            <div>6</div>
            <div>5</div>
            <div>4</div>
            <div>3</div>
            <div>2</div>
            <div>1</div>
          </div>

          {/* coluna B */}
          <div>
            B
            <Cavalo />
            <div>7</div>
            <div>6</div>
            <div>5</div>
            <div>4</div>
            <div>3</div>
            <div>2</div>
            <div>1</div>
          </div>

          {/* coluna C */}
          <div>
            C
            <Bispo />
            <div>7</div>
            <div>6</div>
            <div>5</div>
            <div>4</div>
            <div>3</div>
            <div>2</div>
            <div>1</div>
          </div>

          {/* coluna D */}
          <div>
            D
            <Rainha />
            <div>7</div>
            <div>6</div>
            <div>5</div>
            <div>4</div>
            <div>3</div>
            <div>2</div>
            <div>1</div>
          </div>

          {/* coluna E */}
          <div>
            E
            <Rei />
            <div>7</div>
            <div>6</div>
            <div>5</div>
            <div>4</div>
            <div>3</div>
            <div>2</div>
            <div>1</div>
          </div>


          {/* coluna F */}
          <div>
            F
            <Bispo />
            <div>7</div>
            <div>6</div>
            <div>5</div>
            <div>4</div>
            <div>3</div>
            <div>2</div>
            <div>1</div></div>

          {/* coluna G */}
          <div>
            G
            <Cavalo />
            <div>7</div>
            <div>6</div>
            <div>5</div>
            <div>4</div>
            <div>3</div>
            <div>2</div>
            <div>1</div></div>


          {/* coluna H */}
          <div>
            H
            <Torre />
            <div>7</div>
            <div>6</div>
            <div>5</div>
            <div>4</div>
            <div>3</div>
            <div>2</div>
            <div>1</div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;