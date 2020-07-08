import { Socket } from './socket';

export interface Cpu
{
    id : number;
    model: string;
    clockSpeed : number;
    coreNumber : number;
    threadNumber : number;
    tdp : number;
    price : number;
    socket : Socket;
    brand : string;
}

export interface CpuShort
{
    id : number;
    model: string;
    socket : Socket;
    brand : string;
}