"use strict";
exports.__esModule = true;
exports.IDL = void 0;
exports.IDL = {
    address: "WBA52hW35HZU5R2swG57oehbN2fTr7nNhNDgfjnqUoZ",
    metadata: {
        name: "wba_prereq",
        version: "0.1.0",
        spec: "0.1.0",
        description: "Created with Anchor"
    },
    version: "0.1.0",
    name: "wba_prereq",
    instructions: [
        {
            name: "complete",
            discriminator: [0, 77, 224, 147, 136, 25, 88, 76],
            accounts: [
                {
                    name: "signer",
                    writable: true,
                    signer: true
                },
                {
                    name: "prereq",
                    writable: true,
                    pda: {
                        seeds: [
                            {
                                kind: "const",
                                value: [112, 114, 101, 114, 101, 113]
                            },
                            {
                                kind: "account",
                                path: "signer"
                            },
                        ]
                    }
                },
                {
                    name: "system_program",
                    writable: false,
                    address: "11111111111111111111111111111111"
                },
            ],
            args: [
                {
                    name: "github",
                    type: { array: ["u8"] }
                },
            ]
        },
        {
            name: "update",
            discriminator: [219, 200, 88, 176, 158, 63, 253, 127],
            accounts: [
                {
                    name: "signer",
                    writable: true,
                    signer: true
                },
                {
                    name: "prereq",
                    writable: true
                },
                {
                    name: "system_program",
                    writable: false,
                    address: "11111111111111111111111111111111"
                },
            ],
            args: [
                {
                    name: "github",
                    type: { array: ["u8"] }
                },
            ]
        },
    ],
    accounts: [
        {
            name: "Q2Prereq2024",
            discriminator: [210, 203, 168, 103, 251, 233, 204, 6]
        },
    ],
    errors: [
        {
            code: 6000,
            name: "InvalidGithubAccount",
            msg: "Invalid Github account"
        },
    ],
    types: [
        {
            name: "Q2Prereq2024",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "github",
                        type: { array: ["u8"] }
                    },
                    {
                        name: "key",
                        type: { defined: "publicKey" }
                    },
                ]
            }
        },
    ]
};
