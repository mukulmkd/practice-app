import React from 'react';
import Data from './Data';
import { PDFDownloadLink } from "@react-pdf/renderer";
import './App.css';

export interface IAppState {
  data: string[];
  show: boolean;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [],
      show: false
    }
  }
  componentDidMount() {
    this.setState({
      data: ['Mukul', 'Akash', 'Lakshmi'],
      show: true
    });
  }
  render() {
    return (
      <div>
        {this.state.show && (
          <PDFDownloadLink
            document={<Data data={this.state.data} />}
            fileName="mypdf.pdf"
            style={{
              textDecoration: "none",
              padding: "10px",
              color: "#4a4a4a",
              backgroundColor: "#f2f2f2",
              border: "1px solid #4a4a4a"
            }}
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download Pdf"
            }
          </PDFDownloadLink>
        )}
      </div>
    );
  }
}

export default App;
