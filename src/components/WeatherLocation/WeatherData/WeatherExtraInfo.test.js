import React from 'react';
import { shallow, mount, render } from 'enzyme';
//TEST UNIT: WeatherExtraInfo
import WeatherExtraInfo from './WeatherExtraInfo';


describe('A suite | WeatherExtraInfo', function() { 
    const humidity = 20;
    it('should be selectable by class "weatherExtraInfoCont"', function() {
      expect(shallow(<WeatherExtraInfo humidity={humidity} wind='' />).is('.weatherExtraInfoCont')).toBe(true);
    });
  
    it('should mount in a full DOM', function() {
      expect(mount(<WeatherExtraInfo humidity={humidity} wind=''  />).find('.weatherExtraInfoCont').length).toBe(1);
    });
  
    it('should render to static HTML', function() {
      expect(render(<WeatherExtraInfo humidity={humidity} wind='10'  />).text()).toEqual('Humedad: 20 %Vientos: 10');
    });
  });
