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
  ButtonAddGroup,
  ButtonAddImg,
  PopUpContainer,
  PopContentContainer,
  PopUpClose,
  Input,
  TitlePop,
  ButtonPop,
  InputContainer,
} from './styles';

import notes from '../../../assets/paper-plane.svg';
import extracts from '../../../assets/origami.svg';
import user from '../../../assets/man.svg';
import add from '../../../assets/plus.svg'
import idea from '../../../assets/idea.svg'

import PopUp from 'react-base-popup';

class Sidebar extends Component {
  state = {
    input: '',
    popped: false
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value })
  }


  handlePop = () => {
    this.setState({popped: !this.state.popped})
  }

  render() {
    const { groups, selectGroup, privateGroup } = this.props;
    return (
      <SidebarContainer>
        <H3>
          <Img src={user} />
          Nikko89
        </H3>

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
          <div style={{display: 'flex'}}>
            <SName>
              WORKSPACE
            </SName>

            <ButtonAddGroup onClick={this.handlePop}>
              <ButtonAddImg alt='add' src={add} />
            </ButtonAddGroup>
          </div>

          {/* THIS IS THE POP UP SECTION, GONNA BE A MESS 🤖 */}
            <PopUp disable
              pop={this.state.popped}
              popup={{borderRadius: '30px', height: '60vh'}}
              >

              <PopUpContainer>
                <PopUpClose onClick={this.handlePop}>
                  <span role='img' aria-label='x'>X</span>
                </PopUpClose>

                <PopContentContainer>
                  <img src={idea} alt='idea' style={{height: '15vh'}} />
                  <TitlePop>
                    Let's create a new workspace!
                  </TitlePop>

                  <InputContainer>
                    <Input
                      type='text'
                      placeholder='🚀 Workspace name'
                      onChange={this.handleInputChange}
                      value={this.state.input}
                    />
                  </InputContainer>

                  <InputContainer>
                    <Input
                      type='text'
                      placeholder='✉️ User e-mail'
                    />
                  </InputContainer>

                  <ButtonPop onClick={this.props.createGroup(this.state.input)}>Create workspace</ButtonPop>
                </PopContentContainer>
              </PopUpContainer>
            </PopUp>
          {/* END OF POP UP */}

          {groups.map(group => (
            <Sect key={group.id} onClick={() => selectGroup(group.id)}>
              {/* <GroupInitial><p>{group.name && group.name.slice(0,1)}</p></GroupInitial> */}
              <GroupInitial><p>{group.name.slice(0,1)}</p></GroupInitial>
              {group.name}
            </Sect>
          ))}
        </GSection>
      </SidebarContainer>
    );
  }
}

export default Sidebar;


