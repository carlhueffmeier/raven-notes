import React, { Component } from 'react';
import {
  SidebarContainer,
  H3,
  SName,
  USection,
  GSection,
  Sect,
  Img,
  GroupInitial,
  PopUpContainer,
  Input,
  TitlePop,
  ButtonPop,
  InputContainer,
} from './styles';
import notes from '../../../assets/paper-plane.svg';
import extracts from '../../../assets/origami.svg';
import user from '../../../assets/man.svg';


import PopUp from 'react-base-popup';

class Sidebar extends Component {
  state = {
    input: ''
  }
  handleInputChange = (e) => {
    this.setState({ input: e.target.value })
  }
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
            {/* THIS IS THE POP UP SECTION, GONNA BE A MESS 🤖 */}
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
                  <Input
                    type='text'
                    placeholder='Super duper group name 🙆🏼‍'
                    onChange={this.handleInputChange}
                    value={this.state.input}
                  />
                </InputContainer>

                <ButtonPop onClick={() => console.log('group', this.state.input)|| this.props.createGroup(this.state.input)}>CREATE!</ButtonPop>
              </PopUpContainer>

            </PopUp>
            {/* END OF POP UP */}

          </SName>
          {groups.map(group => (
            <Sect key={group.id} onClick={() => selectGroup(group.id)}>
              <GroupInitial><p>{groups.name && group.name.slice(0,1)}</p></GroupInitial>
              {group.name}
            </Sect>
          ))}
        </GSection>
      </SidebarContainer>
    );
  }
}

export default Sidebar;


