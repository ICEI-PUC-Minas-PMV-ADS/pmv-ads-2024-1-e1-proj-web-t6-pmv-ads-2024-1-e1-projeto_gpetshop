const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        SolicitacaoAgendamento: './src/SolicitacaoAgendamento/index.js',
        paginaInicial: './src/paginaInicial/index.js',
        CadastroClientes: './src/Cadastroclientes/index.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader',],
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/svg',
                    },
                }],
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'Imagens',
                        },
                    },
            ]}
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: ({ chunk }) => {
            return `${chunk.name}/${chunk.name}.js`;
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/SolicitacaoAgendamento/index.html',
            filename: 'SolicitacaoAgendamento/SolicitacaoAgendamento.html',
            chunks: ['page1'],
        }),
        new HtmlWebpackPlugin({
            template: './src/paginaInicial/index.html',
            filename: 'paginaInicial/paginaInicial.html', 
            chunks: ['page2'], 
        }),
        new HtmlWebpackPlugin({
            template: './src/Cadastroclientes/index.html',
            filename: 'Cadastroclientes/Cadastroclientes.html', 
            chunks: ['page3'], 
        }),
    ],
}
