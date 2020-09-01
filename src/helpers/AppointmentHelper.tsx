import {Linking, Text} from "react-native";
import React from "react";
import _default from "react-native-reanimated/lib/typescript/ReanimatedModuleCompat";

export default function renderHyperlinkedText(string, baseStyles = {}, linkStyles = {}, openLink) {
    if (typeof string !== 'string') return null;
    const httpRegex = /http/g;
    const wwwRegex = /www/g;
    const httpType = httpRegex.test(string);
    const wwwType = wwwRegex.test(string);
    if ((httpType || wwwType)) {
        // Reset these regex indices because `comRegex` throws it off at its completion.
        httpRegex.lastIndex = 0;
        wwwRegex.lastIndex = 0;
        const httpIndices = httpType ? getMatchedIndices(httpRegex, string) : getMatchedIndices(wwwRegex, string);
        console.log(httpIndices);
        const result = [];
        let noLinkString = string.substring(0, httpIndices[0] || string.length);
        result.push(<Text key={noLinkString} style={baseStyles}>{ noLinkString }</Text>);
        for (let i = 0; i < httpIndices.length; i += 1) {
            // Link bis zum nächstes Abstand
            let nextSpace = string.indexOf(' ', httpIndices[i] + 1);
            let nextSpaceLineBreak = string.indexOf('\n', httpIndices[i] + 1);
            if (nextSpace == -1 && nextSpaceLineBreak == -1) {
                string += '\n';
                nextSpace = string.indexOf('\n', httpIndices[i] + 1);
            } else if (nextSpace == -1){
                nextSpace = string.indexOf('\n', httpIndices[i] + 1);
            }
            console.log(httpIndices[i] + " " + nextSpace);
            const linkString = string.substring(httpIndices[i], nextSpace);
            result.push(
                <Text
                    key={linkString}
                    style={[baseStyles, linkStyles]}
                    onPress={openLink ? () => openLink(linkString) : () => Linking.openURL(linkString)}
                >
                    {linkString}
                </Text>
            );
            noLinkString = string.substring(nextSpace, httpIndices[i + 1] || string.length);
            if (noLinkString) {
                result.push(
                    <Text key={noLinkString} style={baseStyles}>
                        {noLinkString}
                    </Text>
                );
            }
        }
        return result;
    }
    return <Text style={baseStyles}>{ string }</Text>;
}

function getMatchedIndices(regex, text) {
    const result = [];
    let match;
    do {
        match = regex.exec(text);
        if (match) result.push(match.index);
    } while (match);
    return result;
}