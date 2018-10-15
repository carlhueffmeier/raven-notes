import React, { Component } from 'react';
import {
  SidebarContainer,
  H3,
  SName,
  USection,
  GSection,
  Sect,
  Img,
  PopUpContainer,
  Input,
  TitlePop,
  ButtonPop,
  InputContainer,
  LabelInput
} from './styles';
import notes from '../../../assets/paper-plane.svg';
import extracts from '../../../assets/origami.svg';
import codeworks from '../../../assets/codeworks-logo.svg';
import user from '../../../assets/man.svg';


import PopUp from 'react-base-popup';

class Sidebar extends Component {
  render() {
    const { groups, selectGroup, privateGroup } = this.props;
    return (
      <SidebarContainer>
        <H3>
          <Img src={user} />
          Nikko89
        </H3>

        {/* Getting the notes and extracts from user. */}
        <USection>
          <SName>PRIVATE</SName>
          <Sect onClick={() => selectGroup(privateGroup.id)}>
            <Img src={notes} />
            All Notes
          </Sect>
          <Sect onClick={() => console.log('this is to show extracts')}>
            <Img src={extracts} />
            Extracts
          </Sect>
        </USection>

        <GSection>
          <SName>
            WORKSPACE
            {/* THIS IS POP UP SECTION, GONNA BE A MESS 🤖 */}
            <PopUp
              onPop={()=> console.log('i/m on pop!')}
              onUnpop={()=> console.log('not pop')}
              buttonText='➕'
              >

                <PopUpContainer>
                  <TitlePop>
                    Let's create a new cool group! <span role='img' aria-label='monkey'>🙉</span>
                  </TitlePop>

                  <InputContainer>
                    {/* Check input type file and label for file. */}
                    {/* <input type='file' name='file' id='file' class='inputfile' /> */}
                    {/* <LabelInput><span role='img' aria-label='img'>IMG</span></LabelInput> */}
                    <Input type='text' placeholder='Super duper group name 🙆🏼‍'/>
                  </InputContainer>

                  <ButtonPop>CREATE!</ButtonPop>
                </PopUpContainer>
            </PopUp>
            {/* END OF POP UP */}

            </SName>
          {groups.map(group => (
            <Sect key={group.id} onClick={() => selectGroup(group.id)}>
              <Img src={codeworks} />
              {group.name}
            </Sect>
          ))}
        </GSection>
      </SidebarContainer>
    );
  }
}

export default Sidebar;


