import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getSheetNumber } from './redux/sheet/sheet.action';

import PopUp from './components/add-options-popup/popUp.component';
import AddPage from './components/add-page/add-page.component';
import Preface from './components/preface/preface.component';
import Sheet from './components/sheet/sheet.component';
import Page from './components/page/page.component';
import Cover from './components/cover/cover.component';

import './App.scss';
const App = (props) => {
  const {getSheetNumber} = props;

  useEffect(() => {
    const sheets = document.querySelectorAll('.sheet-inner');
    getSheetNumber(sheets.length);
  })

  return (
    <div className="App">
      <div className='container'>
        <Sheet cover={true} front={<Page>
          <Cover />
        </Page>}></Sheet>
        <Sheet sheetNumber='sheet-0' front={<Page>
          <Cover />
        </Page>} back={<Preface />}></Sheet>
        <Sheet  front={<AddPage />} />
        <PopUp />
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  getSheetNumber: (num) => dispatch(getSheetNumber(num)),
})

export default connect(null, mapDispatchToProps)(App);
