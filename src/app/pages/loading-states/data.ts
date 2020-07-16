export type LoadingData = {
  name: string;
  data?: {
    heroValue: number,
    loadValue: number;
    battery: number;
    channels:
      {
        icon: string;
        label: string;
        value: number;
        unit: string;
      }[];

  }
}

export const dataList: LoadingData[]= [
    {
        name: 'placeholder1',
        data: {
            heroValue: 0,
            loadValue: 20,
            battery: 12,
            channels: [
                {
                    icon: 'wb_sunny',
                    label: 'Temperature',
                    value: 68,
                    unit: '°F'
                },
                {
                    icon: 'brightness_high',
                    label: 'Output Voltage',
                    value: 480,
                    unit: 'V'
                },
                {
                    icon: 'wb_incandescent',
                    label: 'Output Current',
                    value: 15,
                    unit: 'A'
                }
            ]
        }
    },
    {
        name: 'placeholder2',
        data: {
            heroValue: 100,
            loadValue: 33,
            battery: 52,
            channels: [
                {
                    icon: 'wb_sunny',
                    label: 'Temperature',
                    value: 68,
                    unit: '°F'
                },
                {
                    icon: 'brightness_high',
                    label: 'Output Voltage',
                    value: 480,
                    unit: 'V'
                },
                {
                    icon: 'wb_incandescent',
                    label: 'Output Current',
                    value: 15,
                    unit: 'A'
                }
            ]
        }
    },
    {
        name: 'placeholder3',
        data: {
            heroValue: 72,
            loadValue: 98,
            battery: 98,
            channels: [
                {
                    icon: 'wb_sunny',
                    label: 'Temperature',
                    value: 50,
                    unit: '°F'
                },
                {
                    icon: 'brightness_high',
                    label: 'Output Voltage',
                    value: 680,
                    unit: 'V'
                },
                {
                    icon: 'wb_incandescent',
                    label: 'Output Current',
                    value: 13,
                    unit: 'A'
                }
            ]
        },
    }, {
        name: 'placeholder4',
        data: {
            heroValue: 54,
            loadValue: 73,
            battery: 22,
            channels: [
                {
                    icon: 'wb_sunny',
                    label: 'Temperature',
                    value: 78,
                    unit: '°F'
                },
                {
                    icon: 'brightness_high',
                    label: 'Output Voltage',
                    value: 250,
                    unit: 'V'
                },
                {
                    icon: 'wb_incandescent',
                    label: 'Output Current',
                    value: 20,
                    unit: 'A'
                }
            ]
        },
    }
];

export const placeholderList: LoadingData[] = [
  {
    name: 'placeholder1',
    data: undefined
  },
  {
    name: 'placeholder2',
    data: undefined
  },
  {
    name: 'placeholder3',
    data: undefined
  }, {
    name: 'placeholder4',
    data: undefined
  }
];
