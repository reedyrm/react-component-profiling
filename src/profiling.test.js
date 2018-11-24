/* eslint-env jest */
import Benchmark from 'react-component-benchmark';
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


//Simple
import { SimpleComponent } from './components/simple/simpleComponent';
import { SimpleComponentPure } from './components/simple/simpleComponentPure';
import { SimpleComponentFunctional } from './components/simple/simpleComponentFunctional';
import { SimpleComponentMemoizedFunctional} from './components/simple/simpleComponentMemoizedFunctional';


const printOnCompleteResults = (resultName, results) => {
  console.log(`${resultName} ... Min: ${Math.round(results.min * 1000)} | Mean: ${Math.round(results.mean* 1000)} | Max: ${Math.round(results.max*1000)}`);
};

describe('Benchmark', () => {
  let props;
  let meanTime;
  
  beforeEach(() => {
    meanTime = 0;
    props = {
      component: null,
      onComplete: jest.fn(results => {
        const mappedResults = {
          max: results.max,
          min: results.min,
          median: results.median,
          mean: results.mean,
          stdDev: results.stdDev,
          p70: results.p70,
          p95: results.p95,
          p99: results.p99
        };
        meanTime = mappedResults.mean;
      }),
      samples: 20
    };
  });
  
  describe('Simple', () => {
    describe('Component', () => {

      it('should mounting time', () => {
        props.component = SimpleComponent;
        props.onComplete = printOnCompleteResults.bind(this, 'Simple Component (Mount)');
        const component = mount(<Benchmark {...props} />);
        component.instance().start();
      });

      it('should update time', () => {
        props.component = SimpleComponent;
        props.onComplete = printOnCompleteResults.bind(this, 'Simple Component (Update)');
        const component = mount(<Benchmark {...props} type='update' />);
        component.instance().start();
      });

      it('should unmount time', () => {
        props.component = SimpleComponent;
        props.onComplete = printOnCompleteResults.bind(this, 'Simple Component (Unmount)');
        const component = mount(<Benchmark {...props} type='unmount' />);
        component.instance().start();
      });
    });
    //
    // describe('PureComponent', () => {
    //
    //   it('should mounting time', () => {
    //     props.component = SimpleComponentPure;
    //     props.onComplete = printOnCompleteResults.bind(this, 'Simple Pure Component (Mount)');
    //     const component = mount(<Benchmark {...props} />);
    //     component.instance().start();
    //   });
    //
    //   it('should update time', () => {
    //     props.component = SimpleComponentPure;
    //     props.onComplete = printOnCompleteResults.bind(this, 'Simple Pure Component (Update)');
    //     const component = mount(<Benchmark {...props} type='update' />);
    //     component.instance().start();
    //   });
    //
    //   it('should unmount time', () => {
    //     props.component = SimpleComponentPure;
    //     props.onComplete = printOnCompleteResults.bind(this, 'Simple Pure Component  (Unmount)');
    //     const component = mount(<Benchmark {...props} type='unmount' />);
    //     component.instance().start();
    //   });
    // });

    // describe('Functional Component', () => {
    //   it('should mounting time', () => {
    //     props.component = SimpleComponentFunctional;
    //     props.onComplete = printOnCompleteResults.bind(this, 'Simple Functional Component (Mount)');
    //     const component = mount(<Benchmark {...props} />);
    //     component.instance().start();
    //   });
    //
    //   it('should update time', () => {
    //     props.component = SimpleComponentFunctional;
    //     props.onComplete = printOnCompleteResults.bind(this, 'Simple Functional Component (Update)');
    //     const component = mount(<Benchmark {...props} type='update' />);
    //     component.instance().start();
    //   });
    //
    //   it('should unmount time', () => {
    //     props.component = SimpleComponentFunctional;
    //     props.onComplete = printOnCompleteResults.bind(this, 'Simple Functional Component  (Unmount)');
    //     const component = mount(<Benchmark {...props} type='unmount' />);
    //     component.instance().start();
    //   });
    // });

    // describe('Memoized Functional Component', () => {
    //   it('should mounting time', () => {
    //     props.component = SimpleComponentMemoizedFunctional;
    //     props.onComplete = printOnCompleteResults.bind(this, 'Simple Memoized Functional Component (Mount)');
    //     const component = mount(<Benchmark {...props} />);
    //     component.instance().start();
    //   });
    //
    //   it('should update time', () => {
    //     props.component = SimpleComponentMemoizedFunctional;
    //     props.onComplete = printOnCompleteResults.bind(this, 'Simple Memoized Functional Component (Update)');
    //     const component = mount(<Benchmark {...props} type='update' />);
    //     component.instance().start();
    //   });
    //
    //   it('should unmount time', () => {
    //     props.component = SimpleComponentMemoizedFunctional;
    //     props.onComplete = printOnCompleteResults.bind(this, 'Simple Memoized Functional Component  (Unmount)');
    //     const component = mount(<Benchmark {...props} type='unmount' />);
    //     component.instance().start();
    //   });
    // });
  });

});
