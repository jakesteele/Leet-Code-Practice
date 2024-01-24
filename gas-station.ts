/*
* There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
* You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.
* Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique
*/

function canCompleteCircuit(gas: number[], cost: number[]): number {
    let currentGas : number = 0;
      let p : number = 0;
      const l : number = (gas.length - 1);
      for (let i = 0; i <= l;) {
          p = i; // p is my current pointer value;
          currentGas = gas[i];
          while ((currentGas -= cost[p]) >= 0) {
              if ((p += 1) > l) p = 0;
              if (p == i) return i; 
              currentGas += gas[p];
          }
          if (i !== p && p > i) i = p; // Go to the point where you failed, anything before that will fail there again. 
          else if (i !== p && p < i) return -1; // If you failed behind you, nothing else can pass.
          i++;
      }
      return -1;
  };